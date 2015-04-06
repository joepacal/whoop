Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {

  Template.chat.helpers ({
    'readMessage': function(){
      return Messages.find();
    }
  });

  Template.chat.events ({
    'submit form': function(event){

      var msgText = event.target.msgText.value;
      var tag = event.target.topicField.value;
      var isTopic = event.target.isTopic.value;


      Messages.insert({
        text: msgText,
        ts: new Date(),
        owner: 'John Dummy',
        isTopic: isTopic,
        relTopic: '',
        tag: tag
      });

      event.preventDefault();
    },
    'click status': function(event){
      console.log('statusclicked')
    }
  });



} //isClient

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
} // isServer
