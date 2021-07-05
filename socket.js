let io;

module.exports = {
  init: httpServer => {
    io = require('socket.io')(httpServer);
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error('Socket.io not initialized!');
    }
    return io;
  }
};
// mongodb+srv://matthias:bjs0220@node-complete.cqski.mongodb.net/myFirstDatabase?retryWrites=true&w=majority