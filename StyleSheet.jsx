import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lavender',
        flex: 1,
        justifyContent: 'center'
    },
});

export const titleStyles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    titleHeader: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
        color: 'black',
    },
    startContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },
    startButton: {
        alignSelf: 'center',
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
    },
    startButtonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    },
  });

  export const mainStyles = StyleSheet.create({
    picContainer: {
        flex: 12,
        backgroundColor: 'black',
    },
    questionsContainer: {
        backgroundColor: 'white',
        margin: 15,
        marginHorizontal: 21,
        padding: 5,
        paddingBottom: 0,
        borderRadius: 10,
        flex: 4.5,
        paddingLeft: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    questionContainer: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    questionText: {
        flex: 1,
        fontSize: 24,
        fontWeight: '400',
        alignSelf: 'center',
        color: 'black'
    },
    answersContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'whitesmoke',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    answerText: {
        fontSize: 28,
        textAlign: 'center',
        color: 'black',
        borderWidth: 0, 
        borderRadius: 10,
        padding: 2
    },
    hr: {
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        marginLeft: 40
    },
    vl: {
        fontSize: 28,
        fontWeight: 100,
        color: 'grey'
    },
    selected: {
        backgroundColor: '#E0E0E0',
        overflow: 'hidden'
    },
    enterContainer: {
        flex: .8,
    },
    enterButton: {
        flex: 1,
        backgroundColor: 'white',
        alignSelf: 'center',
        paddingLeft: 145,
        paddingRight: 145,
        borderRadius: 10,
        justifyContent: 'center'
    },
    enterText: {
        fontSize: 24,
        fontWeight: 400
    }
  });