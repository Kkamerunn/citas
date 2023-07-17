import { useState } from "react"
import { Modal, Text, SafeAreaView, StyleSheet, View, TextInput, ScrollView, Button } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';

const Form = ({modalVisible}) => {
    const [patient, setPatient] = useState('')
    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState(new Date())
    const [symptoms, setSymptoms] = useState('')
    const [show, setShow] = useState(false);

    const onChange = event => {
        setShow(!show);
    };
    
    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
        >
            <SafeAreaView style={styles.content}>
                <ScrollView>
                    <Text style={styles.title}>New {''}
                        <Text style={styles.titleBold}>Date</Text>
                    </Text>
                    <View style={styles.field}>
                        <Text style={styles.label}>Patient name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Patient name"
                            placeholderTextColor={'#666'}
                            value={patient}
                            onChangeText={setPatient}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.label}>Owner's name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Owner name"
                            placeholderTextColor={'#666'}
                            value={owner}
                            onChangeText={setOwner}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.label}>Owner's email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Owner email"
                            placeholderTextColor={'#666'}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.label}>Owner's phone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Owner phone"
                            placeholderTextColor={'#666'}
                            keyboardType='number-pad'
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>
                    <View style={styles.field}>
                        <Button onPress={showDatepicker} title="Show date picker!" />
                        <Button onPress={showTimepicker} title="Show time picker!" />
                        <Text>Selected: {date.toLocaleString()}</Text>
                        {show && (
                            <DateTimePicker
                                value={date}
                                onChange={onChange}
                            />
                        )}
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.label}>Symptoms</Text>
                        <TextInput
                            style={[styles.input, styles.inputSymptoms]}
                            placeholder="Symptoms"
                            placeholderTextColor={'#666'}
                            value={symptoms}
                            onChangeText={setSymptoms}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#6D28D9',
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30
    },
    titleBold: {
        fontWeight: '900'
    },
    field: {
        marginTop: 10,
        marginHorizontal: 30
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10
    },
    inputSymptoms: {
        height: 100
    }
})

export default Form