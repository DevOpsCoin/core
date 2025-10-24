FROM rust:1.82-slim

# ----------------------------------------------------------
# Base dependencies
# ----------------------------------------------------------
RUN apt-get update && apt-get install -y \
    ca-certificates libssl-dev pkg-config build-essential curl git python3 clang libudev-dev protobuf-compiler \
    && rm -rf /var/lib/apt/lists/*

# ----------------------------------------------------------
# Build Solana CLI from source (v1.18.26)
# ----------------------------------------------------------
RUN git clone https://github.com/solana-labs/solana.git /solana \
    && cd /solana \
    && git checkout v1.18.26 \
    && cargo build --release --bin solana \
    && cargo build --release --bin solana-keygen \
    && cargo build --release --bin solana-test-validator \
    && cp target/release/solana* /usr/local/bin/ \
    && cd / && rm -rf /solana

# ----------------------------------------------------------
# Install Anchor CLI (v0.31.0)
# ----------------------------------------------------------
RUN cargo install --git https://github.com/coral-xyz/anchor --tag v0.31.0 --locked anchor-cli

# ----------------------------------------------------------
# App workspace
# ----------------------------------------------------------
WORKDIR /app
COPY . .

CMD ["bash"]
