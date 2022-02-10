//Creacion de funciones que contienen las clases de board, ball y bars que son necesitadas
//en el juego
(function () {
    self.Board = function (width, height) {
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }

    // ----------------
    //Creación de metodo get elements para obtener los elementos del board usando self.Board.prototype


    self.Board.prototype = {
        get elements() {
            var elements = this.bars;
           elements.push(this.ball);
            return elements;
        }
    }

})();

(function () {
    self.Bar = function (x, y, width, height, board) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this);
        this.kind = "rectangle";
    }


    self.Bar.prototype = {
        down: function () {

        },
        up: function () {

        }
    }

})();


//------------
//Funcion que dibuja los elementops del tableroo usando canvas


(function () {
    self.BoardView = function (canvas, board) {
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");
    }

    self.BoardView.prototype = {
        draw: function () {
           
            for (var i = this.board.elements.length - 1; i >= 0; i--) {
            
                var el = this.board.elements[i];
                draw(this.ctx, el);
            };
        }
    }

    function draw(ctx, element) {
       if (element != null && element.hasOwnProperty("kind")) {
            console.log("si entre");
            switch (element.kind) {
                case "rectangle":
                    ctx.fillRect(element.x, element.y, element.width, element.height);
                    break;
            }
        }

    }


})();

//-----------
//Main del programa, manda los parametros para las funciones previamente creadas
//Instancia los objetos y a la vista le manda el modelo (board)

window.addEventListener("load", main);

function main() {
    console.log("Hola mundo");
    var board = new Board(800, 400);
    var bar = new Bar(20, 100, 40, 100, board);
    var bar = new Bar(750, 100, 40, 100, board);
    var canvas = document.getElementById("canvas");
    var board_view = new BoardView(canvas, board);
    console.log(board);
    board_view.draw();

}
