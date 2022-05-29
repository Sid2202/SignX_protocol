// import axios from 'axios'

const list =[];
async function main() {
    const signx = await ethers.getContractFactory("SignX");
 
    // Start deployment, returning a promise that resolves to a contract object
    const sign = await signx.deploy();   
    await sign.deployed();
    console.log("Contract deployed to address:", sign.address);

    // const data = await sign.sign("1st message", "2nd thingy");
    // // const data2 = await sign.sign("2nd message")
    // await data.wait();
    // await data2.wait();
    // console.log(data);

    // const [_, randomPerson] = await ethers.getSigners();
    // data = await sign.connect(randomPerson).sign("Another message!");
    // await data.wait();

  //   let allSigners = await sign.getAllSigners();
  // console.log(allSigners);
    // console.log(sign);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });