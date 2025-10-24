FROM rust:1.80-slim

RUN apt-get update && apt-get install -y \
    libssl-dev pkg-config build-essential curl git python3 \
    && rm -rf /var/lib/apt/lists/*

# Install Solana CLI
RUN sh -c "$(curl -sSfL https://release.solana.com/v1.18.14/install)"
ENV PATH="/root/.local/share/solana/install/active_release/bin:${PATH}"

# Install Anchor
RUN cargo install --git https://github.com/coral-xyz/anchor avm --locked \
    && avm install latest \
    && avm use latest

WORKDIR /app
COPY . .

CMD ["bash"]
