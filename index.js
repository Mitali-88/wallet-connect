 
 
    var account;

    // https://docs.walletconnect.com/quick-start/dapps/web3-provider
    var provider = new WalletConnectProvider.default({
      rpc: {

        50: "https://erpc.xdcrpc.com",
        // 51: "https://rpc.apothem.network/"
      },
     
    });

    var connectWC = async () => {
      await provider.enable(); 
      const web3 = new Web3(provider);
      window.w3 = web3

      var accounts  = await web3.eth.getAccounts(); 
      account = accounts[0]; 
      document.getElementById("address").value = account;
      var balance = await web3.eth.getBalance(account);
      console.log("see your address",account);
      // var final=balance/1000000000000000000
      console.log("Your balance:", web3.utils.fromWei(balance, "ether"));
    }

var send = async () => {

  console.log("see",w3.utils.toWei("0.001", "ether"))
  if (w3) {
    try {
      const transaction = await w3.eth.sendTransaction({
        from: account,
        to: "0x80793f2eFe8fB2d553Ca2C82AF9ABd415327161e",
        value: w3.utils.toWei(0.001.toString(), "ether")
        // value: 0.001
      });
      console.log("Transaction successful:", transaction);
    }
     catch (error) {
      console.log("Transaction failed:", error);
    }
  } 
  else {
    console.log("Web3 instance not available.");
  }
};

    var disconnect = async () => {
      await provider.disconnect()
    }

 