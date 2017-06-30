	class Offer{
		constructor(name, quantity, unitPrice){
			this.name = name;
			this.quantity = quantity;
			this.unitPrice = unitPrice;
		} 
	}
	class Demand{
		constructor (name, requiredQuantity, unitPrice){
			this.name = name;
			this.requiredQuantity = requiredQuantity;
			this.unitPrice = unitPrice;
			this.capital = unitPrice * requiredQuantity;
		}
	}

	class stockExchange{
		constructor (){
			this.offers = new Array ();
			this.demands = new Array ();
			this.transactions = new Array ();
			this.gain = 0; 
		}
		addOffer (newOffer){
			this.offers.push(newOffer);
		}
		addDemand (newDemand){
			this.demands.push(newDemand);
		}
		reviewState (){
			var revoffers = this.offers;
			var revgain = this.gain;
			var offersOfdemand = new Array();
			this.demands.forEach(function(demand) {
				 offersOfdemand = revoffers.filter(function(offer){
					return offer.name == demand.name; 
				});
				offersOfdemand.sort(function(offer1,offer2){
					return offer1.unitPrice > offer2.unitPrice;
				});
				while (offersOfdemand.length > 0 && demand.capital >= offersOfdemand[0].unitPrice && demand.unitPrice >= offersOfdemand[0].unitPrice ){
					if(demand.requiredQuantity >= offersOfdemand[0].quantity){
						demand.capital = demand.capital-(offersOfdemand[0].unitPrice*offersOfdemand[0].quantity)
						revgain += (offersOfdemand[0].unitPrice*offersOfdemand[0].quantity)*0.05;
						demand.requiredQuantity = demand.requiredQuantity-offersOfdemand[0].quantity
						offersOfdemand.shift();
					}
					else {
						demand.capital = demand.capital-(offersOfdemand[0].unitPrice*demand.requiredQuantity)
						revgain += (offersOfdemand[0].unitPrice*offersOfdemand[0].quantity)*0.05;
						demand.requiredQuantity = 0;
					}
					console.log(`Ganciancia de la plataforma: ${revgain}\n
								 Recurso vendido: ${demand.name}\n
								 Precio unitario: ${demand.unitPrice}\n
								 Cantidad a requerir: ${demand.requiredQuantity}
								 Capital actual: ${demand.capital}`);
				}
			});
		}
	}



	//test///////
	var newstockExchange = new stockExchange();
	newstockExchange.addOffer(new Offer("oil",10,100));
	newstockExchange.addOffer(new Offer("gold",8,50));
	newstockExchange.addOffer(new Offer("plate",50,20));
	newstockExchange.addOffer(new Offer("oil",10,200));
	newstockExchange.addOffer(new Offer("oil",10,100));
	newstockExchange.addDemand(new Demand("oil",100,100));
	newstockExchange.addDemand(new Demand("gold",4,50));

	newstockExchange.reviewState();

