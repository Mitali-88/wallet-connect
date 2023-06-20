var account;

var provider = new WalletConnectProvider.default({
  rpc: {
    50: "https://erpc.xdcrpc.com",
    // 51: "https://rpc.apothem.network/"
  },
});

var web3;

var connectWC = async () => {
  await provider.enable();
  web3 = new Web3(provider);

  var accounts = await web3.eth.getAccounts();
  account = accounts[0];
  document.getElementById("address").innerHTML = account;
  var balance = await web3.eth.getBalance(account);
  console.log("See your address:", account);
  console.log("Your balance:", web3.utils.fromWei(balance, "ether"));
};

var send = async () => {
  if (web3) {
    try {
      var toAddress = document.getElementById("indent").value;
      const transaction = await web3.eth.sendTransaction({
        from: account,
        to:toAddress,
        value: web3.utils.toWei("0.001", "ether")
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
  console.log("wallet disconnected");
};
// to: "0x80793f2eFe8fB2d553Ca2C82AF9ABd415327161e",