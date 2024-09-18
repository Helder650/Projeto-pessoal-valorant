let menuText = "Escolha uma classe para ver os agentes:\n1 - Duelist\n2 - Initiator\n3 - Sentinel\n4 - Controller"
let selectclass = ""
let selectagent = ""
let agent1 = ""
let agent2 = ""
let menuAgents = ""
let agentsDetails = ""
let duelistMenu = "Jett\nReyna"
let initiatorMenu = "Breach\nSova"
let sentinelMenu = "Cypher\nChamber"
let controllerMenu = "Omen\nBrimstone"
let duelistDetails = "Jett: Jett é uma duelista ágil que pode se movimentar rapidamente e usar habilidades que a permitem desviar dos inimigos e atacar com precisão.\nReyna: Reyna é uma duelista que se cura e se fortalece ao eliminar inimigos, tornando-se mais poderosa conforme vence batalhas."
let initiatorDetails = "Breach: Breach é um iniciador que usa explosivos para desorientar e prejudicar os inimigos, facilitando a entrada da equipe em áreas controladas.\nSova: Sova é um iniciador que usa habilidades de reconhecimento para revelar a posição dos inimigos e causar dano com flechas especiais."
let sentinelDetails = "Cypher: Cypher é uma sentinela que usa dispositivos de vigilância para coletar informações sobre os inimigos e proteger áreas chave.\nChamber: Chamber é uma sentinela que utiliza armas e dispositivos de alta tecnologia para controlar o campo de batalha e eliminar inimigos."
let controllerDetails = "Omen: Omen é um controlador que usa habilidades de teletransporte e obscuridade para desorientar os inimigos e se reposicionar estrategicamente.\nBrimstone: Brimstone é um controlador que usa habilidades de fumaça e incendiárias para dominar e controlar áreas do mapa."

do {
    selectclass = prompt(menuText)

    switch (selectclass) {
        case "1":
            selectclass = "Duelist"
            break
        case "2":
            selectclass = "Initiator"
            break
        case "3":
            selectclass = "Sentinel"
            break
        case "4":
            selectclass = "Controller"
            break
        default:
            alert("Escolha inválida. Tente novamente.")
            selectclass = ""
    }
} while (selectclass === "")

alert("Você escolheu a classe: " + selectclass)

if (selectclass === "Duelist") {
    menuAgents = "Você escolheu a classe: Duelist\n\nEscolha um agente para ver detalhes:\n" + duelistMenu
    selectagent = prompt(menuAgents)
    if (selectagent === "Jett") {
        agent1 = "Jett"
        agentsDetails = "Jett: Jett é uma duelista ágil que pode se movimentar rapidamente e usar habilidades que a permitem desviar dos inimigos e atacar com precisão."
    } else if (selectagent === "Reyna") {
        agent1 = "Reyna"
        agentsDetails= "Reyna: Reyna é uma duelista que se cura e se fortalece ao eliminar inimigos, tornando-se mais poderosa conforme vence batalhas."
    } else {
        agenteDetails = "Agente desconhecido."
    }
} else if (selectclass === "Initiator") {
    menuAgents = "Você escolheu a classe: Initiator\n\nEscolha um agente para ver detalhes:\n" + initiatorMenu
    selectagent = prompt(menuAgents)
    if (selectagent === "Breach") {
        agent1 = "Breach"
        agentsDetails= "Breach: Breach é um iniciador que usa explosivos para desorientar e prejudicar os inimigos, facilitando a entrada da equipe em áreas controladas."
    } else if (selectagent === "Sova") {
        agent1 = "Sova"
        agentsDetails= "Sova: Sova é um iniciador que usa habilidades de reconhecimento para revelar a posição dos inimigos e causar dano com flechas especiais."
    } else {
        agentsDetails= "Agente desconhecido."
    }
} else if (selectclass === "Sentinel") {
    menuAgents = "Você escolheu a classe: Sentinel\n\nEscolha um agente para ver detalhes:\n" + sentinelMenu
    selectagent = prompt(menuAgents)
    if (selectagent === "Cypher") {
        agent1 = "Cypher"
        agentsDetails= "Cypher: Cypher é uma sentinela que usa dispositivos de vigilância para coletar informações sobre os inimigos e proteger áreas chave."
    } else if (selectagent === "Chamber") {
        agent1 = "Chamber"
        agentsDetails = "Chamber: Chamber é uma sentinela que utiliza armas e dispositivos de alta tecnologia para controlar o campo de batalha e eliminar inimigos."
    } else {
        agentsDetails= "Agente desconhecido."
    }
} else if (selectclass === "Controller") {
    menuAgents = "Você escolheu a classe: Controller\n\nEscolha um agente para ver detalhes:\n" + controllerMenu
    selectagent = prompt(menuAgents)
    if (selectagent === "Omen") {
        agent1 = "Omen"
        agentsDetails= "Omen: Omen é um controlador que usa habilidades de teletransporte e obscuridade para desorientar os inimigos e se reposicionar estrategicamente."
    } else if (selectagent === "Brimstone") {
        agent1 = "Brimstone"
        agentsDetails= "Brimstone: Brimstone é um controlador que usa habilidades de fumaça e incendiárias para dominar e controlar áreas do mapa."
    } else {
        agentsDetails= "Agente desconhecido."
    }
}

alert("Detalhes do agente escolhido:\n" + agentsDetails)

let allAgents = "Jett\nReyna\nBreach\nSova\nCypher\nChamber\nOmen\nBrimstone"
let challengeAgent = prompt("Desafie um agente para batalha (Digite o nome do agente):\n" + allAgents)

if (challengeAgent === "Jett") {
    agentsDetails = "Jett: Jett é uma duelista ágil que pode se movimentar rapidamente e usar habilidades que a permitem desviar dos inimigos e atacar com precisão."
    agent2 = "Jett"
} else if (challengeAgent === "Reyna") {
    agentsDetails = "Reyna: Reyna é uma duelista que se cura e se fortalece ao eliminar inimigos, tornando-se mais poderosa conforme vence batalhas."
    agent2 = "Reyna"
} else if (challengeAgent === "Breach") {
    agentsDetails = "Breach: Breach é um iniciador que usa explosivos para desorientar e prejudicar os inimigos, facilitando a entrada da equipe em áreas controladas."
    agent2 = "Breach"
} else if (challengeAgent === "Sova") {
    agentsDetails = "Sova: Sova é um iniciador que usa habilidades de reconhecimento para revelar a posição dos inimigos e causar dano com flechas especiais."
    agent2 = "Sova"
} else if (challengeAgent === "Cypher") {
    agentsDetails = "Cypher: Cypher é uma sentinela que usa dispositivos de vigilância para coletar informações sobre os inimigos e proteger áreas chave."
    agent2 = "Cypher"
} else if (challengeAgent === "Chamber") {
    agentsDetails = "Chamber: Chamber é uma sentinela que utiliza armas e dispositivos de alta tecnologia para controlar o campo de batalha e eliminar inimigos."
    agent2 = "Chamber"
} else if (challengeAgent === "Omen") {
    agentsDetails = "Omen: Omen é um controlador que usa habilidades de teletransporte e obscuridade para desorientar os inimigos e se reposicionar estrategicamente."
    agent2 = "Omen"
} else if (challengeAgent === "Brimstone") {
    agentsDetails = "Brimstone: Brimstone é um controlador que usa habilidades de fumaça e incendiárias para dominar e controlar áreas do mapa."
    agent2 = "Brimstone"
} else {
    agentsDetails = "Agente desconhecido."
    agent2 = ""
}

alert("Descrição do agente desafiado:\n" + agentsDetails)

let shield1 = prompt("O agente " + agent1 + " tem colete? (sim/não)")
let shield2 = prompt("O agente " + agent2 + " tem colete? (sim/não)")
let lifeAgent1 = (shield1 === "sim") ? 150 : 100
let lifeChallenge = (shield2 === "sim") ? 150 : 100

alert("O agente " + agent1 + " tem " + lifeAgent1 + " de vida.")
alert("O agente desafiado " + agent2 + " tem " + lifeChallenge + " de vida.")

let damagePerTurn = 20
let turn

for (turn = 1; lifeAgent1 > 0 && lifeChallenge > 0; turn++) {
    lifeAgent1 -= damagePerTurn
    lifeChallenge -= damagePerTurn

    if (lifeAgent1 < 0) lifeAgent1 = 0
    if (lifeChallenge < 0) lifeChallenge = 0

    alert(`Turno ${turn}:\nVida do agente ${agent1}: ${lifeAgent1}\nVida do agente desafiado ${agent2}: ${lifeChallenge}`)

    if (lifeAgent1 === 0 && lifeChallenge === 0) {
        alert("Empate! Ambos os agentes chegaram a 0 de vida ao mesmo tempo.")
        break
    } else if (lifeAgent1 === 0) {
        alert("O agente " + agent2 + " ganhou! O agente " + agent1 + " perdeu.")
        break
    } else if (lifeChallenge === 0) {
        alert("O agente " + agent1 + " ganhou! O agente " + agent2 + " perdeu.")
        break
    }
}