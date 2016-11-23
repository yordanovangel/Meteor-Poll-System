// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no polls available create sample data
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = [
      {
        question: 'Подкрепяте ли годишната държавна субсидия, отпускана за финансиране на политическите партии и коалициите, да бъде един лев за един получен действителен глас на последните парламентарни избори?',
        choices: [
          { text: 'ДА', votes: 0 },
          { text: 'НЕ', votes: 0 },
          { text: 'НЯМАМ МНЕНИЕ', votes: 0 }
        ]
      },
      {
        question: 'Подкрепяте ли народните представители да се избират с мажоритарна избирателна система с абсолютно мнозинство в два тура?',
        choices: [
          { text: 'ДА', votes: 0 },
          { text: 'НЕ', votes: 0 },
          { text: 'НЯМАМ МНЕНИЕ', votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });

  }

});