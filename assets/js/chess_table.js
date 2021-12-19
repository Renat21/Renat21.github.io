var figures = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', '0', '0', '0', '0',
 '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
  '0', '0', '0', '0', '0', '0', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
$(function () {
    create();
    setDroppable();
});
function setDraggable() {
    $('.figure').draggable();
}
function setDroppable() {
    $('.square').droppable({
        drop: function (event, ui) {
            let now = ui.draggable.attr('id');
            let then = this.id;
            move(now, then);
        }
    })
}
// Движение фигур
function move(now, then){
    let poly = document.getElementById(now);
    let newPoly = document.getElementById(then);
    let elem = poly.innerHTML.replace(now, then).replace(/position: relative; [\w\s-;: ]+/, 'position: relative;');

    poly.innerHTML = "";
    newPoly.innerHTML = elem;
    figures[then] = figures[now];
    figures[now] = '0';
    setDraggable();
}
// Создание доски
function create(){
    let table = document.createElement("table");
    let board = document.getElementsByClassName("chess_desk")[0];
    for (let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 8; j++) {
            let td = document.createElement('td');
            if (i%2 == j%2) {
                td.className = "square white";
                td.id = String(i * 8 + j);
                td.innerHTML = get(figures[i * 8 + j], i * 8 + j)
            }
            else {
                td.className = "square black";
                td.id = String(i * 8 + j);
                td.innerHTML = get(figures[i * 8 + j], i * 8 + j)
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    board.appendChild(table);
    setDraggable();
}
function get(figure, cord){
    switch (figure){
        case 'K' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/black_king.png' width='94%' height='94%'></div>".replace('$cord', cord);
        case 'Q' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/black_queen.png' width='94%' height='94%'></div>".replace('$cord', cord);
        case 'R' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/black_rook.png' width='94%' height='94%'></div>".replace('$cord', cord);
        case 'N' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/black_knight.png' width='94%' height='94%'></div>".replace('$cord', cord);
        case 'B' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/black_bishop.png' width='94%' height='94%'></div>".replace('$cord', cord);
        case 'P' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/black_pawn.png' width='94%' height='94%'></div>".replace('$cord', cord);

        case 'k' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/white_king.png' width='94%' height='94%'></div>".replace('$cord', cord);
        case 'q' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/white_queen.png' width='94%' height='94%'></div>".replace('$cord', cord);
        case 'r' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/white_rook.png' width='94%' height='94%'></div>".replace('$cord', cord);
        case 'n' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/white_knight.png' width='94%' height='94%'></div>".replace('$cord', cord);
        case 'b' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/white_bishop.png' width='94%' height='94%'></div>".replace('$cord', cord);
        case 'p' : return "<div class='figure' id='$cord'><img src='../Курсовая/assets/images/white_pawn.png' width='94%' height='94%'></div>".replace('$cord', cord);
        case '0' : return "";
    }
}

