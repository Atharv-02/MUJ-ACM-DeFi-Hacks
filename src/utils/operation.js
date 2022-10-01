import { tezos } from "./tezos";

export const writing_pet_operation = async (title,desc) => {
  try {
    const contractInstance = await tezos.wallet.at("KT1V4NS7FAJXNCtbfY6mHoDnrsz1yX8tKx8e");
    const op = await contractInstance.methods.writing_pet(desc,title).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
}; 

export const signing_pet_operation = async (number) => {
  try {
    const contractInstance = await tezos.wallet.at("KT1V4NS7FAJXNCtbfY6mHoDnrsz1yX8tKx8e");
    const op = await contractInstance.methods.signature(number).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
}; 