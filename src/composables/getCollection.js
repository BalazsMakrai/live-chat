import { ref } from 'vue';
import { projectFiresore } from '../firebase/config';

const getCollection = (collection) => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = projectFiresore.collection(collection).orderBy('createdAt');
    collectionRef.onSnapshot(() => {
        let results = [];
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({
                ...doc.data(),
                id: doc.id
            });
        });
        documents.value = results;
        error.value = null;
    }, () => {
        console.log(err.message);
        documents.value = null;
        error.value = 'Could not fetch data';
    });

    return { error, documents }
};
export default getCollection