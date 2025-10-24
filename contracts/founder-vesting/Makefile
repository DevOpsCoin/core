# ======================================================
# DevOpsCoin Founder Vesting - Makefile
# ------------------------------------------------------
# Simplifies build, deploy, claim, and testing commands
# for the Solana Anchor-based vesting program.
# ======================================================

# ---------- CONFIG ----------
CONTAINER_NAME = devopscoin-vesting
NETWORK_DEVNET = https://api.devnet.solana.com
NETWORK_MAINNET = https://api.mainnet-beta.solana.com
WALLET_PATH = $(PWD)/id.json
SRC_PATH = $(PWD)
RPC_ENV = -e ANCHOR_WALLET=/app/id.json -v $(SRC_PATH):/app

# ---------- BUILD ----------
build:
	@echo "=== Building Docker container ==="
	docker build -t $(CONTAINER_NAME) .

# ---------- SHELL ----------
shell-devnet:
	@echo "=== Opening devnet shell ==="
	docker run -it --rm $(RPC_ENV) -e ANCHOR_PROVIDER_URL=$(NETWORK_DEVNET) $(CONTAINER_NAME) bash

shell-mainnet:
	@echo "=== Opening mainnet shell ==="
	docker run -it --rm $(RPC_ENV) -e ANCHOR_PROVIDER_URL=$(NETWORK_MAINNET) $(CONTAINER_NAME) bash

# ---------- DEPLOY ----------
deploy-devnet:
	@echo "=== Deploying to Solana Devnet ==="
	docker run -it --rm $(RPC_ENV) -e ANCHOR_PROVIDER_URL=$(NETWORK_DEVNET) $(CONTAINER_NAME) bash -c "anchor build && anchor deploy"

deploy-mainnet:
	@echo "=== Deploying to Solana Mainnet ==="
	docker run -it --rm $(RPC_ENV) -e ANCHOR_PROVIDER_URL=$(NETWORK_MAINNET) $(CONTAINER_NAME) bash -c "anchor build && anchor deploy"

# ---------- INITIALIZE (runs migrations/deploy.js) ----------
init-devnet:
	@echo "=== Initializing vesting on Devnet ==="
	docker run -it --rm $(RPC_ENV) -e ANCHOR_PROVIDER_URL=$(NETWORK_DEVNET) $(CONTAINER_NAME) bash -c "anchor run deploy"

init-mainnet:
	@echo "=== Initializing vesting on Mainnet ==="
	docker run -it --rm $(RPC_ENV) -e ANCHOR_PROVIDER_URL=$(NETWORK_MAINNET) $(CONTAINER_NAME) bash -c "anchor run deploy"

# ---------- CLAIM ----------
claim-devnet:
	@echo "=== Claiming vested tokens (Devnet) ==="
	docker run -it --rm $(RPC_ENV) -e ANCHOR_PROVIDER_URL=$(NETWORK_DEVNET) $(CONTAINER_NAME) bash -c "anchor run claim"

claim-mainnet:
	@echo "=== Claiming vested tokens (Mainnet) ==="
	docker run -it --rm $(RPC_ENV) -e ANCHOR_PROVIDER_URL=$(NETWORK_MAINNET) $(CONTAINER_NAME) bash -c "anchor run claim"

# ---------- TEST CLAIM SIMULATION ----------
claim-test:
	@echo "=== Running local claim simulation test ==="
	docker run -it --rm $(RPC_ENV) -e ANCHOR_PROVIDER_URL=$(NETWORK_DEVNET) $(CONTAINER_NAME) bash -c "node scripts/test_claim.js"

# ---------- LOCAL VALIDATOR ----------
localnet:
	@echo "=== Starting local Solana test validator ==="
	solana-test-validator

# ---------- CLEANUP ----------
clean:
	@echo "=== Cleaning Docker artifacts ==="
	docker system prune -f
