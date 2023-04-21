import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
      UserPoolId: "us-east-1_rSgeMKJg2",
    ClientId: "7vhce6jnev4r3akph0mt31u3nc"
}

export default new CognitoUserPool(poolData);