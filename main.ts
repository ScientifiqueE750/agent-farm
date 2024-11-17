player.onChat("Farm", function () {
    agent.move(FORWARD, 1)
    agent.setItem(SEEDS, 16, 1)
    agent.setAssist(DESTROY_OBSTACLES, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(LEFT, 1)
            agent.till(FORWARD)
            agent.place(FORWARD)
        }
        agent.move(BACK, 1)
        agent.move(RIGHT, 4)
    }
})
