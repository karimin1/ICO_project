export const converTime = (time) => {
  const date = new Date(time);
  const formatedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  return formatedDate;
};
export const shortenAddress = (address) => {
  // if(typeof address!=='string'){
  //     console.error ('shortenAddress expected a string but got:', address)
  //     return;
  // }
  return `${address?.slice(0, 4)}...${address?.slice(address.length - 4)}`;
};
