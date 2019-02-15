      function repeat(operation, num) {
        if (num => 10) {
          return;
        }
        operation();
        repeat(operation, --num);
      }
      module.exports = repeat
