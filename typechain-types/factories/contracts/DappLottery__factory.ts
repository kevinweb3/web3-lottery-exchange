/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  DappLottery,
  DappLotteryInterface,
} from "../../contracts/DappLottery";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_servicePercent",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "luckyNumberId",
        type: "uint256",
      },
    ],
    name: "buyTicket",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "prize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ticketPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiresAt",
        type: "uint256",
      },
    ],
    name: "createLottery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getLotteries",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ticketPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "participants",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "drawn",
            type: "bool",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiresAt",
            type: "uint256",
          },
        ],
        internalType: "struct DappLottery.LotteryStruct[]",
        name: "Lotteries",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getLottery",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ticketPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "participants",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "drawn",
            type: "bool",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiresAt",
            type: "uint256",
          },
        ],
        internalType: "struct DappLottery.LotteryStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getLotteryLuckyNumbers",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getLotteryParticipants",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "string",
            name: "lotteryNumber",
            type: "string",
          },
          {
            internalType: "bool",
            name: "paid",
            type: "bool",
          },
        ],
        internalType: "struct DappLottery.ParticipantStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getLotteryResult",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "paidout",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sharePerWinner",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "string",
                name: "lotteryNumber",
                type: "string",
              },
              {
                internalType: "bool",
                name: "paid",
                type: "bool",
              },
            ],
            internalType: "struct DappLottery.ParticipantStruct[]",
            name: "winners",
            type: "tuple[]",
          },
        ],
        internalType: "struct DappLottery.LotteryResultStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "luckyNumbers",
        type: "string[]",
      },
    ],
    name: "importLuckyNumbers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numOfWinners",
        type: "uint256",
      },
    ],
    name: "randomlySelectWinners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "serviceBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "servicePercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620037e6380380620037e6833981810160405281019062000037919062000085565b8060018190555050620000b7565b600080fd5b6000819050919050565b6200005f816200004a565b81146200006b57600080fd5b50565b6000815190506200007f8162000054565b92915050565b6000602082840312156200009e576200009d62000045565b5b6000620000ae848285016200006e565b91505092915050565b61371f80620000c76000396000f3fe60806040526004361061009c5760003560e01c806392e845f61161006457806392e845f61461018b578063949ee752146101c8578063ad19c83914610205578063bcc82ec41461022e578063e2e4351614610259578063e8d490f1146102825761009c565b8063298ec208146100a157806335ea2063146100bd57806368fb2eba146100e657806370b261ae146101235780638772d2dd1461014e575b600080fd5b6100bb60048036038101906100b69190611faa565b6102ad565b005b3480156100c957600080fd5b506100e460048036038101906100df9190612216565b6105a4565b005b3480156100f257600080fd5b5061010d60048036038101906101089190612272565b61076a565b60405161011a919061248c565b60405180910390f35b34801561012f57600080fd5b506101386108df565b60405161014591906124bd565b60405180910390f35b34801561015a57600080fd5b5061017560048036038101906101709190612272565b6108e5565b60405161018291906125f6565b60405180910390f35b34801561019757600080fd5b506101b260048036038101906101ad9190612272565b610ac8565b6040516101bf9190612715565b60405180910390f35b3480156101d457600080fd5b506101ef60048036038101906101ea9190612272565b610d59565b6040516101fc91906127f9565b60405180910390f35b34801561021157600080fd5b5061022c6004803603810190610227919061281b565b610e45565b005b34801561023a57600080fd5b5061024361118e565b6040516102509190612abb565b60405180910390f35b34801561026557600080fd5b50610280600480360381019061027b9190611faa565b6114bb565b005b34801561028e57600080fd5b50610297611a7f565b6040516102a491906124bd565b60405180910390f35b60066000838152602001908152602001600020600082815260200190815260200160002060009054906101000a900460ff161561031f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031690612b3a565b60405180910390fd5b6003600083815260200190815260200160002060050154341015610378576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036f90612bcc565b60405180910390fd5b60036000838152602001908152602001600020600601600081548092919061039f90612c1b565b91905055506004600083815260200190815260200160002060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200160056000868152602001908152602001600020848154811061040357610402612c63565b5b90600052602060002001805461041890612cc1565b80601f016020809104026020016040519081016040528092919081815260200182805461044490612cc1565b80156104915780601f1061046657610100808354040283529160200191610491565b820191906000526020600020905b81548152906001019060200180831161047457829003601f168201915b5050505050815260200160001515815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816105279190612e9e565b5060408201518160020160006101000a81548160ff0219169083151502179055505050600160066000848152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff02191690831515021790555034600260008282546105999190612f70565b925050819055505050565b3373ffffffffffffffffffffffffffffffffffffffff166003600084815260200190815260200160002060070160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063f90612ff0565b60405180910390fd5b60016005600084815260200190815260200160002080549050106106a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106989061305c565b60405180910390fd5b60016003600084815260200190815260200160002060060154106106fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f1906130c8565b60405180910390fd5b600081511161073e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073590613134565b60405180910390fd5b80600560008481526020019081526020016000209080519060200190610765929190611da1565b505050565b606060046000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156108d457838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461082890612cc1565b80601f016020809104026020016040519081016040528092919081815260200182805461085490612cc1565b80156108a15780601f10610876576101008083540402835291602001916108a1565b820191906000526020600020905b81548152906001019060200180831161088457829003601f168201915b505050505081526020016002820160009054906101000a900460ff1615151515815250508152602001906001019061079f565b505050509050919050565b60025481565b6108ed611dfa565b600760008381526020019081526020016000206040518060c0016040529081600082015481526020016001820160009054906101000a900460ff161515151581526020016001820160019054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201805480602002602001604051908101604052809291908181526020016000905b82821015610ab957838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054610a0d90612cc1565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3990612cc1565b8015610a865780601f10610a5b57610100808354040283529160200191610a86565b820191906000526020600020905b815481529060010190602001808311610a6957829003601f168201915b505050505081526020016002820160009054906101000a900460ff16151515158152505081526020019060010190610984565b50505050815250509050919050565b610ad0611e34565b600360008381526020019081526020016000206040518061016001604052908160008201548152602001600182018054610b0990612cc1565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3590612cc1565b8015610b825780601f10610b5757610100808354040283529160200191610b82565b820191906000526020600020905b815481529060010190602001808311610b6557829003601f168201915b50505050508152602001600282018054610b9b90612cc1565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc790612cc1565b8015610c145780601f10610be957610100808354040283529160200191610c14565b820191906000526020600020905b815481529060010190602001808311610bf757829003601f168201915b50505050508152602001600382018054610c2d90612cc1565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5990612cc1565b8015610ca65780601f10610c7b57610100808354040283529160200191610ca6565b820191906000526020600020905b815481529060010190602001808311610c8957829003601f168201915b505050505081526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff161515151581526020016007820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600882015481526020016009820154815250509050919050565b606060056000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610e3a578382906000526020600020018054610dad90612cc1565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd990612cc1565b8015610e265780601f10610dfb57610100808354040283529160200191610e26565b820191906000526020600020905b815481529060010190602001808311610e0957829003601f168201915b505050505081526020019060010190610d8e565b505050509050919050565b6000865111610e89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e80906131a0565b60405180910390fd5b6000855111610ecd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec49061320c565b60405180910390fd5b6000845111610f11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0890613278565b60405180910390fd5b60008311610f54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4b906132e4565b60405180910390fd5b60008211610f97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8e90613350565b60405180910390fd5b428111610fd9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd0906133e2565b60405180910390fd5b600080815480929190610feb90612c1b565b9190505550610ff8611e34565b60005481600001818152505086816020018190525085816040018190525084816060018190525083816080018181525050828160a00181815250503381610100019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050428161012001818152505081816101400181815250508060036000836000015181526020019081526020016000206000820151816000015560208201518160010190816110b99190612e9e565b5060408201518160020190816110cf9190612e9e565b5060608201518160030190816110e59190612e9e565b506080820151816004015560a0820151816005015560c0820151816006015560e08201518160070160006101000a81548160ff0219169083151502179055506101008201518160070160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101208201518160080155610140820151816009015590505050505050505050565b606060005467ffffffffffffffff8111156111ac576111ab612000565b5b6040519080825280602002602001820160405280156111e557816020015b6111d2611e34565b8152602001906001900390816111ca5790505b5090506000600190505b60005481116114b75760036000828152602001908152602001600020604051806101600160405290816000820154815260200160018201805461123190612cc1565b80601f016020809104026020016040519081016040528092919081815260200182805461125d90612cc1565b80156112aa5780601f1061127f576101008083540402835291602001916112aa565b820191906000526020600020905b81548152906001019060200180831161128d57829003601f168201915b505050505081526020016002820180546112c390612cc1565b80601f01602080910402602001604051908101604052809291908181526020018280546112ef90612cc1565b801561133c5780601f106113115761010080835404028352916020019161133c565b820191906000526020600020905b81548152906001019060200180831161131f57829003601f168201915b5050505050815260200160038201805461135590612cc1565b80601f016020809104026020016040519081016040528092919081815260200182805461138190612cc1565b80156113ce5780601f106113a3576101008083540402835291602001916113ce565b820191906000526020600020905b8154815290600101906020018083116113b157829003601f168201915b505050505081526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff161515151581526020016007820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160088201548152602001600982015481525050826001836114889190613402565b8151811061149957611498612c63565b5b602002602001018190525080806114af90612c1b565b9150506111ef565b5090565b6007600083815260200190815260200160002060010160009054906101000a900460ff161561151f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611516906134a8565b60405180910390fd5b6004600083815260200190815260200160002080549050811115611578576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156f9061353a565b60405180910390fd5b60008167ffffffffffffffff81111561159457611593612000565b5b6040519080825280602002602001820160405280156115cd57816020015b6115ba611ea6565b8152602001906001900390816115b25790505b509050600060046000858152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561173a57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461168e90612cc1565b80601f01602080910402602001604051908101604052809291908181526020018280546116ba90612cc1565b80156117075780601f106116dc57610100808354040283529160200191611707565b820191906000526020600020905b8154815290600101906020018083116116ea57829003601f168201915b505050505081526020016002820160009054906101000a900460ff16151515158152505081526020019060010190611605565b5050505090506000815167ffffffffffffffff81111561175d5761175c612000565b5b60405190808252806020026020018201604052801561178b5781602001602082028036833780820191505090505b50905060005b82518110156117cd57808282815181106117ae576117ad612c63565b5b60200260200101818152505080806117c590612c1b565b915050611791565b506000600183516117de9190613402565b90505b600181106118be5760006001826117f89190612f70565b428360405160200161180b92919061357b565b6040516020818303038152906040528051906020012060001c61182e91906135d6565b9050600083828151811061184557611844612c63565b5b6020026020010151905083838151811061186257611861612c63565b5b602002602001015184838151811061187d5761187c612c63565b5b6020026020010181815250508084848151811061189d5761189c612c63565b5b602002602001018181525050505080806118b690613607565b9150506117e1565b5060005b84811015611a0957828282815181106118de576118dd612c63565b5b6020026020010151815181106118f7576118f6612c63565b5b602002602001015184828151811061191257611911612c63565b5b60200260200101819052506007600087815260200190815260200160002060040184828151811061194657611945612c63565b5b6020026020010151908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816119d39190612e9e565b5060408201518160020160006101000a81548160ff02191690831515021790555050508080611a0190612c1b565b9150506118c2565b5084600760008781526020019081526020016000206000018190555060016007600087815260200190815260200160002060010160006101000a81548160ff021916908315150217905550426007600087815260200190815260200160002060020181905550611a7885611a85565b5050505050565b60015481565b600060076000838152602001908152602001600020600401805480602002602001604051908101604052809291908181526020016000905b82821015611bf257838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054611b4690612cc1565b80601f0160208091040260200160405190810160405280929190818152602001828054611b7290612cc1565b8015611bbf5780601f10611b9457610100808354040283529160200191611bbf565b820191906000526020600020905b815481529060010190602001808311611ba257829003601f168201915b505050505081526020016002820160009054906101000a900460ff16151515158152505081526020019060010190611abd565b505050509050600060046000848152602001908152602001600020805490506003600085815260200190815260200160002060050154611c329190613630565b90506000606460015483611c469190613630565b611c509190613672565b905060008183611c609190613402565b90506000845182611c719190613672565b905060005b8551811015611cba57611ca7868281518110611c9557611c94612c63565b5b60200260200101516000015183611d26565b8080611cb290612c1b565b915050611c76565b508360026000828254611ccd9190613402565b9250508190555060016007600088815260200190815260200160002060010160016101000a81548160ff021916908315150217905550806007600088815260200190815260200160002060030181905550505050505050565b60008273ffffffffffffffffffffffffffffffffffffffff1682604051611d4c906136d4565b60006040518083038185875af1925050503d8060008114611d89576040519150601f19603f3d011682016040523d82523d6000602084013e611d8e565b606091505b5050905080611d9c57600080fd5b505050565b828054828255906000526020600020908101928215611de9579160200282015b82811115611de8578251829081611dd89190612e9e565b5091602001919060010190611dc1565b5b509050611df69190611edf565b5090565b6040518060c00160405280600081526020016000151581526020016000151581526020016000815260200160008152602001606081525090565b60405180610160016040528060008152602001606081526020016060815260200160608152602001600081526020016000815260200160008152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016000151581525090565b5b80821115611eff5760008181611ef69190611f03565b50600101611ee0565b5090565b508054611f0f90612cc1565b6000825580601f10611f215750611f40565b601f016020900490600052602060002090810190611f3f9190611f43565b5b50565b5b80821115611f5c576000816000905550600101611f44565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b611f8781611f74565b8114611f9257600080fd5b50565b600081359050611fa481611f7e565b92915050565b60008060408385031215611fc157611fc0611f6a565b5b6000611fcf85828601611f95565b9250506020611fe085828601611f95565b9150509250929050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61203882611fef565b810181811067ffffffffffffffff8211171561205757612056612000565b5b80604052505050565b600061206a611f60565b9050612076828261202f565b919050565b600067ffffffffffffffff82111561209657612095612000565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff8211156120cc576120cb612000565b5b6120d582611fef565b9050602081019050919050565b82818337600083830152505050565b60006121046120ff846120b1565b612060565b9050828152602081018484840111156121205761211f6120ac565b5b61212b8482856120e2565b509392505050565b600082601f83011261214857612147611fea565b5b81356121588482602086016120f1565b91505092915050565b600061217461216f8461207b565b612060565b90508083825260208201905060208402830185811115612197576121966120a7565b5b835b818110156121de57803567ffffffffffffffff8111156121bc576121bb611fea565b5b8086016121c98982612133565b85526020850194505050602081019050612199565b5050509392505050565b600082601f8301126121fd576121fc611fea565b5b813561220d848260208601612161565b91505092915050565b6000806040838503121561222d5761222c611f6a565b5b600061223b85828601611f95565b925050602083013567ffffffffffffffff81111561225c5761225b611f6f565b5b612268858286016121e8565b9150509250929050565b60006020828403121561228857612287611f6a565b5b600061229684828501611f95565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006122f6826122cb565b9050919050565b612306816122eb565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561234657808201518184015260208101905061232b565b60008484015250505050565b600061235d8261230c565b6123678185612317565b9350612377818560208601612328565b61238081611fef565b840191505092915050565b60008115159050919050565b6123a08161238b565b82525050565b60006060830160008301516123be60008601826122fd565b50602083015184820360208601526123d68282612352565b91505060408301516123eb6040860182612397565b508091505092915050565b600061240283836123a6565b905092915050565b6000602082019050919050565b60006124228261229f565b61242c81856122aa565b93508360208202850161243e856122bb565b8060005b8581101561247a578484038952815161245b85826123f6565b94506124668361240a565b925060208a01995050600181019050612442565b50829750879550505050505092915050565b600060208201905081810360008301526124a68184612417565b905092915050565b6124b781611f74565b82525050565b60006020820190506124d260008301846124ae565b92915050565b6124e181611f74565b82525050565b600082825260208201905092915050565b60006125038261229f565b61250d81856124e7565b93508360208202850161251f856122bb565b8060005b8581101561255b578484038952815161253c85826123f6565b94506125478361240a565b925060208a01995050600181019050612523565b50829750879550505050505092915050565b600060c08301600083015161258560008601826124d8565b5060208301516125986020860182612397565b5060408301516125ab6040860182612397565b5060608301516125be60608601826124d8565b5060808301516125d160808601826124d8565b5060a083015184820360a08601526125e982826124f8565b9150508091505092915050565b60006020820190508181036000830152612610818461256d565b905092915050565b60006101608301600083015161263160008601826124d8565b50602083015184820360208601526126498282612352565b915050604083015184820360408601526126638282612352565b9150506060830151848203606086015261267d8282612352565b915050608083015161269260808601826124d8565b5060a08301516126a560a08601826124d8565b5060c08301516126b860c08601826124d8565b5060e08301516126cb60e0860182612397565b506101008301516126e06101008601826122fd565b506101208301516126f56101208601826124d8565b5061014083015161270a6101408601826124d8565b508091505092915050565b6000602082019050818103600083015261272f8184612618565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061276f8383612352565b905092915050565b6000602082019050919050565b600061278f82612737565b6127998185612742565b9350836020820285016127ab85612753565b8060005b858110156127e757848403895281516127c88582612763565b94506127d383612777565b925060208a019950506001810190506127af565b50829750879550505050505092915050565b600060208201905081810360008301526128138184612784565b905092915050565b60008060008060008060c0878903121561283857612837611f6a565b5b600087013567ffffffffffffffff81111561285657612855611f6f565b5b61286289828a01612133565b965050602087013567ffffffffffffffff81111561288357612882611f6f565b5b61288f89828a01612133565b955050604087013567ffffffffffffffff8111156128b0576128af611f6f565b5b6128bc89828a01612133565b94505060606128cd89828a01611f95565b93505060806128de89828a01611f95565b92505060a06128ef89828a01611f95565b9150509295509295509295565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006101608301600083015161294160008601826124d8565b50602083015184820360208601526129598282612352565b915050604083015184820360408601526129738282612352565b9150506060830151848203606086015261298d8282612352565b91505060808301516129a260808601826124d8565b5060a08301516129b560a08601826124d8565b5060c08301516129c860c08601826124d8565b5060e08301516129db60e0860182612397565b506101008301516129f06101008601826122fd565b50610120830151612a056101208601826124d8565b50610140830151612a1a6101408601826124d8565b508091505092915050565b6000612a318383612928565b905092915050565b6000602082019050919050565b6000612a51826128fc565b612a5b8185612907565b935083602082028501612a6d85612918565b8060005b85811015612aa95784840389528151612a8a8582612a25565b9450612a9583612a39565b925060208a01995050600181019050612a71565b50829750879550505050505092915050565b60006020820190508181036000830152612ad58184612a46565b905092915050565b600082825260208201905092915050565b7f4c75636b79206e756d62657220616c7265616479207573656400000000000000600082015250565b6000612b24601983612add565b9150612b2f82612aee565b602082019050919050565b60006020820190508181036000830152612b5381612b17565b9050919050565b7f696e73756666696369656e742065746865727320746f2062757920657468657260008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000612bb6602183612add565b9150612bc182612b5a565b604082019050919050565b60006020820190508181036000830152612be581612ba9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612c2682611f74565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612c5857612c57612bec565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612cd957607f821691505b602082108103612cec57612ceb612c92565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612d547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612d17565b612d5e8683612d17565b95508019841693508086168417925050509392505050565b6000819050919050565b6000612d9b612d96612d9184611f74565b612d76565b611f74565b9050919050565b6000819050919050565b612db583612d80565b612dc9612dc182612da2565b848454612d24565b825550505050565b600090565b612dde612dd1565b612de9818484612dac565b505050565b5b81811015612e0d57612e02600082612dd6565b600181019050612def565b5050565b601f821115612e5257612e2381612cf2565b612e2c84612d07565b81016020851015612e3b578190505b612e4f612e4785612d07565b830182612dee565b50505b505050565b600082821c905092915050565b6000612e7560001984600802612e57565b1980831691505092915050565b6000612e8e8383612e64565b9150826002028217905092915050565b612ea78261230c565b67ffffffffffffffff811115612ec057612ebf612000565b5b612eca8254612cc1565b612ed5828285612e11565b600060209050601f831160018114612f085760008415612ef6578287015190505b612f008582612e82565b865550612f68565b601f198416612f1686612cf2565b60005b82811015612f3e57848901518255600182019150602085019450602081019050612f19565b86831015612f5b5784890151612f57601f891682612e64565b8355505b6001600288020188555050505b505050505050565b6000612f7b82611f74565b9150612f8683611f74565b9250828201905080821115612f9e57612f9d612bec565b5b92915050565b7f556e617574686f72697a656420656e7469747900000000000000000000000000600082015250565b6000612fda601383612add565b9150612fe582612fa4565b602082019050919050565b6000602082019050818103600083015261300981612fcd565b9050919050565b7f416c72656164792067656e657261746564000000000000000000000000000000600082015250565b6000613046601183612add565b915061305182613010565b602082019050919050565b6000602082019050818103600083015261307581613039565b9050919050565b7f5469636b6574732068617665206265656e207075726368617365640000000000600082015250565b60006130b2601b83612add565b91506130bd8261307c565b602082019050919050565b600060208201905081810360008301526130e1816130a5565b9050919050565b7f4c75636b79206e756d626572732063616e6e6f74206265207a65726f00000000600082015250565b600061311e601c83612add565b9150613129826130e8565b602082019050919050565b6000602082019050818103600083015261314d81613111565b9050919050565b7f7469746c652063616e6e6f7420626520656d7074790000000000000000000000600082015250565b600061318a601583612add565b915061319582613154565b602082019050919050565b600060208201905081810360008301526131b98161317d565b9050919050565b7f6465736372697074696f6e2063616e6e6f7420626520656d7074790000000000600082015250565b60006131f6601b83612add565b9150613201826131c0565b602082019050919050565b60006020820190508181036000830152613225816131e9565b9050919050565b7f696d6167652063616e6e6f7420626520656d7074790000000000000000000000600082015250565b6000613262601583612add565b915061326d8261322c565b602082019050919050565b6000602082019050818103600083015261329181613255565b9050919050565b7f7072697a652063616e6e6f74206265207a65726f000000000000000000000000600082015250565b60006132ce601483612add565b91506132d982613298565b602082019050919050565b600060208201905081810360008301526132fd816132c1565b9050919050565b7f7469636b657450726963652063616e6e6f74206265207a65726f000000000000600082015250565b600061333a601a83612add565b915061334582613304565b602082019050919050565b600060208201905081810360008301526133698161332d565b9050919050565b7f65787069726541742063616e6e6f74206265206c657373207468616e2074686560008201527f2066757475726500000000000000000000000000000000000000000000000000602082015250565b60006133cc602783612add565b91506133d782613370565b604082019050919050565b600060208201905081810360008301526133fb816133bf565b9050919050565b600061340d82611f74565b915061341883611f74565b92508282039050818111156134305761342f612bec565b5b92915050565b7f4c6f7474657279206861766520616c7265616479206265656e20636f6d706c6560008201527f7465640000000000000000000000000000000000000000000000000000000000602082015250565b6000613492602383612add565b915061349d82613436565b604082019050919050565b600060208201905081810360008301526134c181613485565b9050919050565b7f4e756d626572206f662077696e6e6572732065786365656473206e756d62657260008201527f206f66207061727469636970616e747300000000000000000000000000000000602082015250565b6000613524603083612add565b915061352f826134c8565b604082019050919050565b6000602082019050818103600083015261355381613517565b9050919050565b6000819050919050565b61357561357082611f74565b61355a565b82525050565b60006135878285613564565b6020820191506135978284613564565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006135e182611f74565b91506135ec83611f74565b9250826135fc576135fb6135a7565b5b828206905092915050565b600061361282611f74565b91506000820361362557613624612bec565b5b600182039050919050565b600061363b82611f74565b915061364683611f74565b925082820261365481611f74565b9150828204841483151761366b5761366a612bec565b5b5092915050565b600061367d82611f74565b915061368883611f74565b925082613698576136976135a7565b5b828204905092915050565b600081905092915050565b50565b60006136be6000836136a3565b91506136c9826136ae565b600082019050919050565b60006136df826136b1565b915081905091905056fea26469706673582212203d19a95810b8cc9dbf03b78291093e11d24677f5e65ed5479dca5dad87dceaf064736f6c63430008140033";

type DappLotteryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DappLotteryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DappLottery__factory extends ContractFactory {
  constructor(...args: DappLotteryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _servicePercent: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_servicePercent, overrides || {});
  }
  override deploy(
    _servicePercent: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_servicePercent, overrides || {}) as Promise<
      DappLottery & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DappLottery__factory {
    return super.connect(runner) as DappLottery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DappLotteryInterface {
    return new Interface(_abi) as DappLotteryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DappLottery {
    return new Contract(address, _abi, runner) as unknown as DappLottery;
  }
}