import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase.js';

const DatabaseTest = () => {
    const addTestData = async (e) => {
        e.preventDefault();

        try{
            const docRef = await addDoc(collection(db, 'TestCollection'), {
                name: 'client test',
                number: 456
            });
            console.log('Document written with ID: ', docRef.id);
        }catch(e){
            console.error('Error adding document: ', e)
        }
    }

    return(
        <button onClick={addTestData}>Click Me!</button>
    )
}

export default DatabaseTest;