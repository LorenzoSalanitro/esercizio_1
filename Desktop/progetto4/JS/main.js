var turn = 1;
var count = 0;
let Ar = [[600, 601, 602, 603, 606, 605],[606, 608, 609, 610, 611, 612],[616, 615, 616, 617, 618, 619],[621, 622, 623, 626, 625, 626],[628, 629, 630, 631, 632, 633],[635, 636, 637, 638, 639, 60],[670, 677, 688, 699, 687, 678]];
var x = 0;
var y = 0;

function gioca(button)
{
    var PT = 0
    button -= 1

    if(count != -1)
    {
        Posizione(button)
        for(var i = x; i > y; i--)
        {
        if(Ar[button][PT] != 1 && Ar[button][PT] != 2)
        {
            if(turn == 1)
            {
                document.getElementById(i).style.backgroundColor = 'red'
                document.getElementById('mess').innerHTML = " E' IL TURNO DEL GIOCATORE 2"
                document.getElementById('mess').style.color = 'yellow'
                turn = 2
                Ar[button][PT] = 1
            }else
            {
                document.getElementById(i).style.backgroundColor = 'yellow'
                document.getElementById('mess').innerHTML = " E' IL TURNO DEL GIOCATORE 1"
                document.getElementById('mess').style.color = 'red'
                turn = 1
                Ar[button][PT] = 2
            }
            break
        }
        PT++
        }
        count++
    }
        if(count == 62)
        {
            document.getElementById('mess').innerHTML = "pareggio"
            document.getElementById('mess').style.color = 'white'
            count = -1
        }

        vittoria = WinCondition();
        if( vittoria == 1)
        {
            document.getElementById('mess').innerHTML = "hai vinto"
            document.getElementById('mess').style.color = 'white'
            count = -1
        }
}

function Posizione(button)
{
    if(button == 0)
    {
        x = 6
        y = 0
    }
    else if(button == 1)
    {
        x = 12
        y = 6
    }
    else if(button == 2)
    {
        x = 18
        y = 12
    }
    else if(button == 3)
    {
        x = 24
        y = 18
    }
    else if(button == 4)
    {
        x = 30
        y = 24
    }
    else if(button == 5)
    {
        x = 36
        y = 30
    }
    else if(button == 6)
    {
        x = 42
        y = 36
    }
}

function WinCondition()
{
    for(var i = 0; i < 7; i++)
    {
        for(var j = 0; j < 6; j++)
        {
            if(Ar[i][j] == Ar[i][j+1] && Ar[i][j+1] == Ar[i][j+2] && Ar[i][j+2] == Ar[i][j+3])
            {
                return 1
            }else
            if(Ar[i][j] == Ar[i+1][j] && Ar[i+1][j] == Ar[i+2][j] && Ar[i+2][j] == Ar[i+3][j])
            {
                return 1
            }
            else
            if(Ar[i][j] == Ar[i+1][j+1] && Ar[i+1][j+1] == Ar[i+2][j+2] && Ar[i+2][j+2] == Ar[i+3][j+3])
            {
                return 1
            }
        }
    }
    return 0
}