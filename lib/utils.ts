export function isAddressLike(input: string) {
  return /^0x[a-fA-F0-9]{40}$/.test(input);
}
