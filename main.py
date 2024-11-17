def on_on_chat():
    agent.move(FORWARD, 1)
    agent.set_item(SEEDS, 16, 1)
    agent.set_assist(DESTROY_OBSTACLES, True)
    for index in range(4):
        for index2 in range(4):
            agent.move(LEFT, 1)
            agent.till(FORWARD)
            agent.place(FORWARD)
        agent.move(BACK, 1)
        agent.move(RIGHT, 4)
player.on_chat("Farm", on_on_chat)
