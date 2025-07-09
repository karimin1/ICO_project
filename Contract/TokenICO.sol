//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;
interface ERC20{
    function transfer(address recipient,uint256 amount)external returns(bool);
    function balanceOf(address account)external view returns(uint256);
    function allowance(address owner,address spender)external view returns(uint256);
    function approve(address spender,uint256 amount)external returns(bool);
    function transferFrom(address sender,address recipient,uint256 amount)external returns(bool);
    function symbol()external view returns(string memory);
    function totalSupply()external view returns (uint256);
    function name()external view returns(string memory);
    function decimals() external view returns (uint8); // ADD THIS

}
contract TokenICO{
    address public owner;
    address public tokenAddress;
    uint256 public tokenSalePrice;
    uint256 public soldTokens;

    modifier onlyOwner() {
        require(msg.sender==owner,"only contract owner can perform this");
   _;
    }
    constructor(){
        owner=msg.sender;
    }
    function updateToken(address _tokenAddress)public onlyOwner{
        tokenAddress=_tokenAddress;
    }
    function updateTokenSalePrice(uint256 _tokenSAlePrice)public onlyOwner(){
        tokenSalePrice=_tokenSAlePrice;
    }
    function multiply(uint256 x,uint256 y)internal pure returns(uint256 z) {
        require(y==0||(z=x*y)/y==x);

    }


 function buyToken(uint256 _tokenAmount)public payable{
    require(msg.value==multiply(_tokenAmount,tokenSalePrice),"not sufficient");
    ERC20 token=ERC20(tokenAddress);
    require(_tokenAmount<=token.balanceOf(address(this)),"not  enough token availiable");
    require(token.transfer(msg.sender,_tokenAmount*1e18)); 
    soldTokens+=_tokenAmount;
 }
function getTokenDetails()public view
 returns(uint256 tokenPrice,address tokenAddr,
string memory name,string memory symbol,uint256 balance,uint256 totalsupply){
 require(tokenAddress != address(0), "Token address not set");
ERC20 token=ERC20(tokenAddress);
return (
tokenSalePrice,
tokenAddress,
token.name(),
token.symbol(),
token.balanceOf(address(this)),
token.totalSupply()
);
}
function transferToOwner  (uint256 _amount)public payable{
  require(msg.value>_amount,"not sufficient");
(bool success,)=payable(owner).call{value:_amount}("");
require(success,'failed to send ether');
}
function transferEther(address payable _receiver,uint256 _amount)external payable{
    require(msg.value>=_amount,"insuffisant funds sent");
    (bool success,)=_receiver.call{value:_amount}('');
    require(success,'transfer failed');
}
function transferAllToken()public onlyOwner{
    ERC20 token=ERC20(tokenAddress);
    require(token.balanceOf(address(this))>0,"no tokens to widthraw");
    require(token.transfer(owner,token.balanceOf(address(this))),"transaction failed");

}
 }
   

