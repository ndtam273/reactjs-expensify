import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAnMDKUX54AILq893cpy4dYPq93Hr45ufw",
    authDomain: "expensify-19ed7.firebaseapp.com",
    databaseURL: "https://expensify-19ed7.firebaseio.com",
    projectId: "expensify-19ed7",
    storageBucket: "expensify-19ed7.appspot.com",
    messagingSenderId: "248026656408",
    appId: "1:248026656408:web:5bffb2cfc4b017b0822aed"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  // database.ref()
  //     .once('value')
  //     .then((snapshot) => {
  //       const val = snapshot.val();
  //       console.log(val);
  //     })
  //     .catch(() => {
  //       console.log('Error fetching data');
  //     });
database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
});

setTimeout(() => {
  database.ref('age').set(28);
}, 3500);

//   database.ref().set({
//      name: 'Tam Nguyen',
//      age: 30,
//      job: {
//        title: '侍',
//        company: '帝国'
//      },
//      stressLevel: 6,
//      isSingle: true,
//      location: {
//          city: 'DaNang',
//          country: 'VietNam'
//      }
//   }).then(() => {
//       console.log('data has been saved!');
//   }).catch((e) => {
//       console.log('this failed', e);
//   });

// //   database.ref().set('This is my data.');
// database.ref('age').set(32);
// database.ref('location/city').set('HaNoi');
// database.ref('attributes').set ( {
//     height: 165,
//     weight: 62
// }).then(() => {
//     console.log('Second set call worked');
// }).catch((e) => {
//     console.log('This did not work', e);
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('Removed!');
// }).catch((e) => {
//     console.log('Remove did not workd', e);
// });

// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Kingdom',
//    'location/city': 'Japan'
    
// });