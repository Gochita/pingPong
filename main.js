//Creacion de funciones que contienen las clases de board, ball y bars que son necesitadas
//en el juego
(function(){
    self.Board=function(width, height){
        this.width=width;
        this.height= height;
        this.playing=false;
        this.game_over=false;
        this.bars=[];
        this.ball=null;
    }

// ----------------
//Creación de metodo get elements para obtener los elementos del board usando self.Board.prototype


    self.Board.prototype={
        get elements(){
            var elements= this.bars;
            elements.push(ball);
            return elements;
        }
    }

})();


//------------
//Funcion que dibuja los elementops del tableroo usando canvas


(function(){
    self.BoardView= function(canvas,board){
        this.canvas=canvas;
        this.canvas.width=board.width;
        this.canvas.height=board.height;
        this.board=board;
        this.ctx= canvas.getContext("2d");
    }

})();

//-----------
//Main del programa, manda los parametros para las funciones previamente creadas

window.addEventListener("load", main);

function main(){
var board= new Board(800,400);
var canvas= document.getElementById("canvas");
var board_view= new BoardView(canvas,board);

}