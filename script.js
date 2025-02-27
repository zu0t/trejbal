let count = 0;
        let rebirths = 0;
        let clickValue = 1;
        let autoClickers = 0;
        let rebirthBoost = 1;
        let hyperClick = 0;
        let autohyperClickers = 0;
        let mangoClick = 0;
        let automangoClicker = 0;
        let autoClickerPrice = 20;
        let multiClickPrice = 10;
        let rebirthPrice = 10000;
        let rebirthUpgradePrice = 1;
        let hyperClickPrice = 5000;
        let autohyperClickerPrice = 20000;
        let mangoClickPrice = 10000000;
        let automangoClickerPrice = 1200000;
        let keysPressed = {};
        
        document.getElementById("clickCount").textContent = count;
        document.getElementById("rebirthCount").textContent = rebirths;

        document.getElementById("clickerButton").addEventListener("click", function() {
            count += clickValue * rebirthBoost;
            document.getElementById("clickCount").textContent = count;
        });

        document.getElementById("autoClicker").addEventListener("click", function() {
            if (count >= autoClickerPrice) {
                count -= autoClickerPrice;
                autoClickers++;
                autoClickerPrice = Math.floor(autoClickerPrice * 2.2);
                document.getElementById("autoPrice").textContent = autoClickerPrice;
            }
        });

        document.getElementById("multiClick").addEventListener("click", function() {
            if (count >= multiClickPrice) {
                count -= multiClickPrice;
                clickValue+=0.5;
                multiClickPrice = Math.floor(multiClickPrice * 2.7);
                document.getElementById("multiPrice").textContent = multiClickPrice;
            }
        });
        document.getElementById("hyperClick").addEventListener("click", function() {
            if (count >= hyperClickPrice) {
                count -= hyperClickPrice;
                clickValue+=20;
                hyperClickPrice = Math.floor(hyperClickPrice * 2.7);
                document.getElementById("hyperPrice").textContent = hyperClickPrice;
            }
        });
        document.getElementById("autohyperClicker").addEventListener("click", function() {
            if (count >= autohyperClickerPrice) {
                count -= autohyperClickerPrice;
                autoClickers+=50;
                autohyperClickerPrice = Math.floor(autohyperClickerPrice * 2.2);
                document.getElementById("autohyperPrice").textContent = autohyperClickerPrice;
            }
        });
        document.getElementById("mangoClick").addEventListener("click", function() {
            if (count >= mangoClickPrice) {
                count -= mangoClickPrice;
                clickValue+=5000;
                mangoClickPrice = Math.floor(mangoClickPrice * 12);
                document.getElementById("mangoPrice").textContent = mangoClickPrice;
            }
        });
        document.getElementById("automangoClicker").addEventListener("click", function() {
            if (count >= automangoClickerPrice) {
                count -= automangoClickerPrice;
                autoClickers+=5000;
                automangoClickerPrice = Math.floor(automangoClickerPrice * 12);
                document.getElementById("automangoPrice").textContent = automangoClickerPrice;
            }
        });
        document.getElementById("rebirth").addEventListener("click", function() {
            if (count >= rebirthPrice) {
                count = 0;
                autoClickers = 0;
                clickValue = 1;
                rebirths++;
                rebirthBoost *= 1.1;
                rebirthPrice *= 3.2;
                document.getElementById("rebirthCount").textContent = rebirths;
                document.getElementById("rebirthBoost").textContent = rebirthBoost;
                document.getElementById("rebirthPrice").textContent = rebirthPrice;
                document.getElementById("clickCount").textContent = count;
            }
        });

        document.getElementById("rebirthUpgrade").addEventListener("click", function() {
            if (rebirths >= rebirthUpgradePrice) {
                rebirths -= rebirthUpgradePrice;
                rebirthBoost *= 2;
                rebirthUpgradePrice += 1;
                document.getElementById("rebirthCount").textContent = rebirths;
                document.getElementById("rebirthBoost").textContent = rebirthBoost;
                document.getElementById("rebirthUpgradePrice").textContent = rebirthUpgradePrice;
            }
        });

        setInterval(function() {
            count += autoClickers * rebirthBoost;
            document.getElementById("clickCount").textContent = count;
        }, 1000);

        document.addEventListener("keydown", function(event) {
            keysPressed[event.code] = true;
            if (keysPressed["Enter"] || keysPressed["Space"] ) {
                event.preventDefault();
            }
        });

        document.addEventListener("keyup", function(event) {
            delete keysPressed[event.code];
        });