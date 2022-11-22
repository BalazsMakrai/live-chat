import { ref, watchEffect } from 'vue';
import { projectFiresore } from '../firebase/config';

const getCollection = (collection) => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = projectFiresore.collection(collection).orderBy('createdAt');
    const unsub = collectionRef.onSnapshot((snap) => {
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

    watchEffect((onInvalidate) => { // unsub from previous collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub())
    });

    return { error, documents }
};
export default getCollection