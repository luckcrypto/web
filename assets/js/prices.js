$(function() {
  getMarketData();
  setInterval(getMarketData, 10000);
});

function getMarketData() {
  getCryptoCompare();
}

function getCryptoCompare() {
  $.when(
    $.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,SOL,XRP,KAS,PEPE,TAO&tsyms=USD")
  ).done(function (data) {
    $("#btcLogo").html('<img src="https://cryptocompare.com' + data.RAW.BTC.USD.IMAGEURL + '">');
    $("#btcSymbol").text((data.RAW.BTC.USD.FROMSYMBOL).toLocaleString());
    $("#btcPrice").text((data.RAW.BTC.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#btcChange").text((data.RAW.BTC.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#btcVol").text((data.RAW.BTC.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#btcCap").text((data.RAW.BTC.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#btcTime").text( (new Date(data.RAW.BTC.USD.LASTUPDATE * 1000) ).toLocaleString());

    $("#ethLogo").html('<img src="https://cryptocompare.com' + data.RAW.ETH.USD.IMAGEURL + '">');
    $("#ethSymbol").text((data.RAW.ETH.USD.FROMSYMBOL).toLocaleString());
    $("#ethPrice").text((data.RAW.ETH.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#ethChange").text((data.RAW.ETH.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#ethVol").text((data.RAW.ETH.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#ethCap").text((data.RAW.ETH.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#ethTime").text( (new Date(data.RAW.ETH.USD.LASTUPDATE * 1000) ).toLocaleString());
    
    $("#dogeLogo").html('<img src="https://cryptocompare.com' + data.RAW.DOGE.USD.IMAGEURL + '">'); 
    $("#dogeSymbol").text((data.RAW.DOGE.USD.FROMSYMBOL).toLocaleString());
    $("#dogePrice").text((data.RAW.DOGE.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#dogeChange").text((data.RAW.DOGE.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#dogeVol").text((data.RAW.DOGE.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#dogeCap").text((data.RAW.DOGE.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#dogeTime").text( (new Date(data.RAW.DOGE.USD.LASTUPDATE * 1000) ).toLocaleString());

    $("#solLogo").html('<img src="https://cryptocompare.com' + data.RAW.SOL.USD.IMAGEURL + '">');
    $("#solSymbol").text((data.RAW.SOL.USD.FROMSYMBOL).toLocaleString());
    $("#solPrice").text((data.RAW.SOL.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#solChange").text((data.RAW.SOL.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#solVol").text((data.RAW.SOL.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#solCap").text((data.RAW.SOL.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#solTime").text( (new Date(data.RAW.SOL.USD.LASTUPDATE * 1000) ).toLocaleString());
    
    $("#xrpLogo").html('<img src="https://cryptocompare.com' + data.RAW.XRP.USD.IMAGEURL + '">');    
    $("#xrpSymbol").text((data.RAW.XRP.USD.FROMSYMBOL).toLocaleString());
    $("#xrpPrice").text((data.RAW.XRP.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#xrpChange").text((data.RAW.XRP.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#xrpVol").text((data.RAW.XRP.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#xrpCap").text((data.RAW.XRP.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#xrpTime").text( (new Date(data.RAW.XRP.USD.LASTUPDATE * 1000) ).toLocaleString());
    
    $("#kasLogo").html('<img src="https://cryptocompare.com' + data.RAW.KAS.USD.IMAGEURL + '">');
    $("#kasSymbol").text((data.RAW.KAS.USD.FROMSYMBOL).toLocaleString());
    $("#kasPrice").text("$" + (data.RAW.KAS.USD.PRICE).toFixed(6));
    $("#kasChange").text((data.RAW.KAS.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#kasVol").text((data.RAW.KAS.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#kasCap").text((data.RAW.KAS.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#kasTime").text( (new Date(data.RAW.KAS.USD.LASTUPDATE * 1000) ).toLocaleString());

    $("#pepeLogo").html('<img src="https://cryptocompare.com' + data.RAW.PEPE.USD.IMAGEURL + '">');
    $("#pepeSymbol").text((data.RAW.PEPE.USD.FROMSYMBOL).toLocaleString());
    $("#pepePrice").text("$" + (data.RAW.PEPE.USD.PRICE).toFixed(6));
    $("#pepeChange").text((data.RAW.PEPE.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#pepeVol").text((data.RAW.PEPE.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#pepeCap").text((data.RAW.PEPE.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#pepeTime").text( (new Date(data.RAW.PEPE.USD.LASTUPDATE * 1000) ).toLocaleString());

    $("#taoLogo").html('<img src="https://cryptocompare.com' + data.RAW.TAO.USD.IMAGEURL + '">');
    $("#taoSymbol").text((data.RAW.TAO.USD.FROMSYMBOL).toLocaleString());
    $("#taoPrice").text("$" + (data.RAW.TAO.USD.PRICE).toFixed(6));
    $("#taoChange").text((data.RAW.TAO.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#taoVol").text((data.RAW.TAO.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#taoCap").text((data.RAW.TAO.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#taoTime").text( (new Date(data.RAW.TAO.USD.LASTUPDATE * 1000) ).toLocaleString());
  });
}



$("#btcChange, #ethChange, #dogeChange, #xrpChange, #kasChange").bind("DOMSubtreeModified", function(){
  if($(this).is(":contains('-')")) {
    $(this).removeClass("positive").addClass("negative");
  } else {
    $(this).removeClass("negative").addClass("positive");
  }
});
