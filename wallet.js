import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

var account;
var provider;

var connectWC = async () => {
  provider = new WalletConnectProvider({
    rpc: {
      50: "https://erpc.xdcrpc.com",
      // 51: "https://rpc.apothem.network/"
    },
  });

  await provider.enable();
  const web3 = new Web3(provider);
  window.w3 = web3;

  var accounts = await web3.eth.getAccounts();
  account = accounts[0];
  document.getElementById("fname").value = account;
  var balance = await web3.eth.getBalance(account);
  console.log("See your address:", account);
  console.log("Your balance:", web3.utils.fromWei(balance, "ether"));
};

var send = async () => {
  if (w3) {
    try {
      const transaction = await w3.eth.sendTransaction({
        from: account,
        to: "xdc80793f2eFe8fB2d553Ca2C82AF9ABd415327161e",
        value: w3.utils.toWei("0.001", "ether"),
      });
      console.log("Transaction successful:", transaction);
    } catch (error) {
      console.log("Transaction failed:", error);
    }
  } else {
    console.log("Web3 instance not available.");
  }
};

var disconnect = async () => {
  await provider.disconnect();
};
