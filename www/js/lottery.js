lottery.draw = {
  holders: [],
  useDatabase: typeof (Storage) !== "undefined",
  totalTickets: 0,
  initialize: function ()
  {
    console.log("initializing lottery draw");
    var btn = document.getElementById('add-ticket-holder'),
      clr = document.getElementById('clear-ticket-holders'),
      drawBtn = document.getElementById('draw-winner');
    util.listen(btn, 'click', lottery.draw.addToDraw);
    util.listen(clr, 'click', lottery.draw.clear);
    util.listen(drawBtn, 'click', lottery.draw.drawWinner);

    if (lottery.draw.useDatabase && localStorage.getItem("lotteryDrawHolders"))
    {
      lottery.draw.holders = JSON.parse(localStorage.getItem("lotteryDrawHolders"));
      lottery.draw.totalTickets = localStorage.getItem("lotteryTotalTickets");
      lottery.draw.holders.forEach(function (t)
      {
        lottery.draw.renderTicketHolders(t);
      });
    }
  },
  save: function ()
  {
    if (lottery.draw.useDatabase)
    {
      localStorage.setItem('lotteryDrawHolders', JSON.stringify(lottery.draw.holders));
      localStorage.setItem('lotteryTotalTickets', lottery.draw.totalTickets);
    }
  },
  clear: function ()
  {
    lottery.draw.holders = [];
    lottery.draw.totalTickets = 0;
    if (lottery.draw.useDatabase)
    {
      localStorage.removeItem('lotteryDrawHolders');
      localStorage.removeItem('lotteryTotalTickets');
    }
    $("#summary").text(0);
    $("#ticket-holders").empty();
    $("#ticket-holders").listview('refresh');
  },
  drawWinner: function ()
  {
    var allTickets = [], w, winnerId;
    lottery.draw.holders.forEach(function (h)
    {
      h.tickets.forEach(function (t) { allTickets.push(t) });
    });
    winnerId = util.random(allTickets.length) - 1;
    console.log("winner idx: " + winnerId);
    console.log("number of tickets in draw: " + allTickets.length);
    var winnerTicket = allTickets[winnerId].ticket;
    var luckyWinner, winnerTicketIdx, holderIdx;
    lottery.draw.holders.forEach(function (h, hIdx)
    {
      h.tickets.forEach(function (t, tIdx)
      {
        if (t.ticket == winnerTicket)
        {
          winnerTicketIdx = tIdx;
          holderIdx = hIdx;
          luckyWinner = h.holder;
        }
      });
      if (luckyWinner)
      {
        lottery.draw.holders[hIdx].tickets.splice(winnerTicketIdx, 1);
        w = { winner: luckyWinner, ticket: winnerTicket };
        lottery.draw.totalTickets--;
        return;
      }
    });
    lottery.draw.save();
    $("#summary").text(lottery.draw.totalTickets);
    $("<p>Winner is: " + w.winner + " with ticket: " + w.ticket + "</p>").insertBefore("#ticket-holders");
  },
  createTickets: function (bought)
  {
    var tickets = [];
    var i, guid;
    for (i = 0; i < bought; i++)
    {
      guid = util.guid();
      lottery.draw.totalTickets++;
      tickets.push({ ticket: guid });
    };
    return tickets;
  },
  addToDraw: function (e)
  {
    var holder = $("#holder-name").val();
    var boughtTickets = $("#holding-tickets").val();
    if (isNaN(boughtTickets))
    {
      $("#holding-tickets").css({ "border-color": "red" });
      return;
    }
    var tickets = lottery.draw.createTickets(boughtTickets);
    var uid = util.guid();
    var entry = { id: uid, holder: holder, tickets: tickets };
    lottery.draw.holders.push(entry);
    lottery.draw.save();
    lottery.draw.renderTicketHolders(entry);
  },
  renderTicketHolders: function (entry)
  {
    $("<li data-role='button' data-holder-uid='" + entry.id + "'>name: " + entry.holder + " holding " + entry.tickets.length + " tickets</li>").appendTo("#ticket-holders");
    $("#ticket-holders").listview('refresh');
    $("#summary").text(lottery.draw.totalTickets);
  }
};