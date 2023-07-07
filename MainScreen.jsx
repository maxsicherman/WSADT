import { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { mainStyles, sharedStyles } from "./StyleSheet";
import { questions, answerSet, answers, outcomes, outcome_list, pix } from "./constants";

function MainScreen() {
    const [ansStack, setAnsStack] = useState([answerSet.weekday, answerSet.morning, answerSet.NY, answerSet.sunny]);
    const [photo, setPhoto] = useState(require("./images/default.jpg"));

    const selectAnswer = (index, ans) => {
        let newAnsStack = [...ansStack];
        newAnsStack[index] = ans;
        setAnsStack(newAnsStack);
    }

    const As = (index) => (
        <View style={mainStyles.answersContainer}>
            <Pressable onPress={() => selectAnswer(index, answers[index][0])} style={mainStyles.answerContainer}>
            {ansStack.includes(answers[index][0]) ?
                <Text style={[mainStyles.answerText, mainStyles.selected]}>{answers[index][0]}</Text>
            :
                <Text style={mainStyles.answerText}>{answers[index][0]}</Text>
            }
            </Pressable>
            <Text style={mainStyles.vl}>|</Text>
            <Pressable onPress={() => selectAnswer(index, answers[index][1])} style={mainStyles.answerContainer}>
            {ansStack.includes(answers[index][1]) ?
                <Text style={[mainStyles.answerText, mainStyles.selected]}>{answers[index][1]}</Text>
            :
                <Text style={mainStyles.answerText}>{answers[index][1]}</Text>
            }
            </Pressable>
        </View>
    )

    const QandAs = questions.map((q, index) =>
        <View style={{flex: 1}} key={index}>
            <View style={mainStyles.questionContainer}>
                <Text style={mainStyles.questionText}>{q}</Text>
                {As(index)}
            </View>
            {(index != questions.length-1) && <View style={mainStyles.hr}></View>}
        </View>
    );

    const submit = () => {
        const selected_answers = ansStack.join(", ");
        const index = outcomes[selected_answers];
        const outcome = outcome_list[index];
        setPhoto(pix[index]);
        Alert.alert("Submitted", "Anna should " + outcome, [{text: "Ok"}])
    }

    return (
        <SafeAreaView style={sharedStyles.backgroundStyle}>
            <View style={mainStyles.picContainer}>
                <Image source={photo} style={{flex: 1, width: '100%', alignItems: 'center'}}/>
            </View>
            <View style={mainStyles.questionsContainer}>
                {QandAs}
            </View>
            <View style={mainStyles.enterContainer}>
                <Pressable onPress={submit} style={mainStyles.enterButton}>
                    <Text style={mainStyles.enterText}>Enter</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default MainScreen;