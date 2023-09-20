import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Layout, Text, Radio } from "@ui-kitten/components";
import { useState } from "react";

export default function Home({ navigation }) {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(1);
  const [checked, setChecked] = useState(false);

  const check = () => {
    if (number == 1) {
      console.log("ONE");
    } else if (number == 2) {
      console.log("two");

      
    }setNumber(number + 1);
  };
  return (
    <>
      <Radio
        style={styles.container}
        checked={checked}
        onChange={(nextChecked) => setChecked(nextChecked)}
      >
        <Text style={styles.textRadio}>{`Checked: ${checked}`}</Text>
      </Radio>

      <Layout style={styles.container} level="1">
        <Button
          onPress={() => check()}
          style={
            number === 1
              ? styles.btnRed
              : number === 2
              ? styles.btnBlue
              : styles.btnGreen
          }
        >
          BUTTON
        </Button>

        <Text style={styles.text}>Click here</Text>
       
      </Layout>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    marginTop: 50,
    alignItems: "center",
  },

  text: {
    marginHorizontal: 8,
    color: "blue",
    fontSize: 40,
  },
  textRadio: {
    fontSize: 35,
    color: 'red'
  },
  btnBlue: {
    alignItems: "center",
    backgroundColor: "blue",
    borderColor: "#63C5DA",
    borderRadius: 10,
    borderWidth: 10,
    padding: 10,
  },
  btnRed: {
    alignItems: "center",
    backgroundColor: "red",
    borderColor: "#80000",
    borderRadius: 20,
    borderWidth: 10,
    padding: 10,
  },
  btnGreen: {
    alignItems: "center",
    backgroundColor: "green",
    borderColor: "#00563B",
    borderRadius: 20,
    borderWidth: 10,
    padding: 10,
  },
});
