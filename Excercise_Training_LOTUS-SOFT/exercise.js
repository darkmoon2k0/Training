const Web3 = require("web3");
var Tx = require("ethereumjs-tx").Transaction;
var Contract = require("web3-eth-contract");
const web3provider = new Web3.providers.HttpProvider(
  "https://kovan.infura.io/v3/078e5af8a47d45b0b5b7960404384074"
);
const web3 = new Web3(web3provider);

//ABI
let jsonInterface = [
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "addOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit0",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "execAddOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "execDeposit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "oldOwner",
        type: "address",
      },
    ],
    name: "execRemove",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "GroupDeposit",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "_to",
        type: "address",
      },
    ],
    name: "GroupWithdrawTo",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "oldOwmer",
        type: "address",
      },
    ],
    name: "removeOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "idVotedAdd",
        type: "uint256",
      },
    ],
    name: "voteAddMem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "idVoteDep",
        type: "uint256",
      },
    ],
    name: "VoteforDeposit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "idVoteRemo",
        type: "uint256",
      },
    ],
    name: "VoteforRemove",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "idVoteWith",
        type: "uint256",
      },
    ],
    name: "VoteforWithdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "_to",
        type: "address",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "balanceGroup",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "countOwner",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "isVotedAdd",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "isVoteDep",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "isVotedRemo",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "isVoteWith",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "listVoteAdd",
    outputs: [
      {
        name: "adrFrom",
        type: "address",
      },
      {
        name: "adrNew",
        type: "address",
      },
      {
        name: "vote",
        type: "uint256",
      },
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "listVoteDep",
    outputs: [
      {
        name: "adrFrom",
        type: "address",
      },
      {
        name: "money",
        type: "uint256",
      },
      {
        name: "vote",
        type: "uint256",
      },
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "listVoteRemo",
    outputs: [
      {
        name: "adrFrom",
        type: "address",
      },
      {
        name: "adrOld",
        type: "address",
      },
      {
        name: "vote",
        type: "uint256",
      },
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "listVoteWith",
    outputs: [
      {
        name: "adrFrom",
        type: "address",
      },
      {
        name: "adrTo",
        type: "address",
      },
      {
        name: "money",
        type: "uint256",
      },
      {
        name: "vote",
        type: "uint256",
      },
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "adr",
        type: "address",
      },
    ],
    name: "SeebalanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

// Need to address
// const adrAccount = "0x6128838F9C79f8Dac4fb80e6B0242e371a4Da237";
// const keyAccount =
//   "0xaa86338a1546e0146df5d89d3f46e502f31b8f6a757b2a679f2f858ccd09e625";

const adrContract = "0x4Ba4071bc846910AE8E0d7aE6759D81eDA65732F";
const keyFrom ="b07776264dfef5adbf823ac6fb20be74c480570f92532280bb993b18659efd12";
const adrFrom = "0xc9566098e29106EEedCb9Bf976948D1E35BA9D25";
const adrTo = "0x901741C5283286Bc46f992EA9Ff6D334D9Ec56A6";
// contract
const contract = new web3.eth.Contract(jsonInterface, adrContract);

// privateKey
var privateKey = Buffer.from(keyFrom, "hex");
var privateKey1 = Buffer.from(
  "aa86338a1546e0146df5d89d3f46e502f31b8f6a757b2a679f2f858ccd09e625",
  "hex"
);

// -------send ETH transaction
// const sendETH = async () => {
// 	web3.eth.getTransactionCount(adrFrom).then(txCount =>{
// 		const txData = {
// 		  nonce: web3.utils.toHex(txCount),
// 		  gasLimit: web3.utils.toHex(10000000),
// 		  gasPrice: web3.utils.toHex(10000000000), // 10-15 gwei should be ok
// 		  from: adrFrom,
// 		  to: adrAccount,
// 		  value: web3.utils.toHex(600000000000000000) // amount you want to send
// 		};

// 	   const transaction = new Tx(txData ,{'chain':'kovan'});
// 		transaction.sign(privateKey);
// 		web3.eth
// 		  .sendSignedTransaction("0x" + transaction.serialize().toString("hex"))
// 		  .on("transactionHash", function(txHash) {
// 			console.log("txHash:" + txHash);
// 		  })
// 	})
// 	}
// senETH();

// add_Owner
// const add_Owner = async () => {
// 	web3.eth.getTransactionCount(adrFrom).then(txCount =>{
// 		const txData = {
// 		  nonce: web3.utils.toHex(txCount),
// 		  gasLimit: web3.utils.toHex(10000000),
// 		  gasPrice: web3.utils.toHex(10000000000),
// 		  from: adrFrom,
// 		  to: adrContract,
// 		  data: contract.methods.addOwner(adrAccount).encodeABI(),
// 		  value: '0x0'
// 		};

// 	   const transaction = new Tx(txData ,{'chain':'kovan'});
// 		transaction.sign(privateKey);
// 		web3.eth
// 		  .sendSignedTransaction("0x" + transaction.serialize().toString("hex"))
// 		  .on("transactionHash", function(txHash) {
// 			console.log("txHash:" + txHash);
// 		  })
// 	})
// 	}

// deposit0 with balance of smart contract = 0
const add_Owner = async () => {
  web3.eth.getTransactionCount(adrFrom).then((txCount) => {
    const txData = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(10000000),
      gasPrice: web3.utils.toHex(10000000000),
      from: adrFrom,
      to: adrContract,
      data: contract.methods.deposit0(100000000).encodeABI(),
      value: web3.utils.toHex(100000000),
    };

    const transaction = new Tx(txData, { chain: "kovan" });
    transaction.sign(privateKey);
    web3.eth
      .sendSignedTransaction("0x" + transaction.serialize().toString("hex"))
      .on("transactionHash", function (txHash) {
        console.log("txHash:" + txHash);
      });
  });
};
// add_Owner();

// see balance
// web3.eth.getBalance(adrContract, function(err, result) {
// 	if (err) {
// 	  console.log(err)
// 	} else {
// 	  console.log(web3.utils.fromWei(result, "ether") + " ETH")
// 	}
//   })

const load = async () => {
  // see countMember
  // const countMember = await contract.methods.countOwner.call().call();
  // console.log( `CountMember: ${countMember}`);
  // see balance smart contract
  const balanceofContract = await contract.methods.getBalance().call();
  console.log(
    `Contractbalance: ${
      web3.utils.fromWei(balanceofContract, "ether") + " ETH"
    }`
  );
};
// load();
//console
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Import account with adress: ", (newAdr) => {
  rl.question("Import account with private key: ", (keyAccount) => {
    web3.eth.getTransactionCount(adrFrom).then((txCount) => {
      const txData = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(10000000),
        gasPrice: web3.utils.toHex(10000000000),
        from: adrFrom,
        to: adrContract,
        data: contract.methods.addOwner(`${newAdr}`).encodeABI(),
        value: "0x0",
      };

      const transaction = new Tx(txData, { chain: "kovan" });
      transaction.sign(privateKey);
      web3.eth
        .sendSignedTransaction("0x" + transaction.serialize().toString("hex"))
        .on("transactionHash", function (txHash) {
          console.log("txHash:" + txHash);
        });
    });
	
  });
});
