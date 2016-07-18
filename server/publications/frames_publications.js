Meteor.publish("frames", function () {
    return Frames.find({});
});
