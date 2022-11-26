function aluminumJoinery(input) {
    let joineryCount = Number(input[0]);
    let joinerySize = input[1];
    let deliveryType = input[2];

    let joineryPrice = 0;
    let orderSum = 0;

    if (joineryCount < 10) {
        console.log("Invalid order");
    } else if (joineryCount >= 10) {
        switch (joinerySize) {
            case "90X130":
                switch (deliveryType) {
                    case "Without delivery":
                        if (joineryCount <= 99) {
                            joineryPrice = 110;
                            orderSum = joineryCount * joineryPrice;
                            if (joineryCount <= 30) {
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 30 && joineryCount <= 60) {
                                orderSum = orderSum * 0.95;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 60) {
                                orderSum = orderSum * 0.92;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            }
                        } else if (joineryCount > 99) {
                            joineryPrice = 110;
                            orderSum = joineryCount * joineryPrice;
                            orderSum = orderSum * 0.92;
                            orderSum = orderSum * 0.96;
                            console.log(`${orderSum.toFixed(2)} BGN`);

                        }
                        break;
                    case "With delivery":
                        if (joineryCount <= 99) {
                            joineryPrice = 110;
                            orderSum = joineryCount * joineryPrice;
                            if (joineryCount <= 30) {
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 30 && joineryCount <= 60) {
                                orderSum = orderSum * 0.95;
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 60) {
                                orderSum = orderSum * 0.92;
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            }
                        } else if (joineryCount > 99) {
                            joineryPrice = 110;
                            orderSum = joineryCount * joineryPrice;

                            orderSum = orderSum * 0.92;
                            orderSum = orderSum + 60;
                            orderSum = orderSum * 0.96;
                            console.log(`${orderSum.toFixed(2)} BGN`);

                        }
                        break;
                }
                break;
            case "100X150":
                switch (deliveryType) {
                    case "Without delivery":
                        if (joineryCount <= 99) {
                            joineryPrice = 140;
                            orderSum = joineryCount * joineryPrice;
                            if (joineryCount <= 40) {
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 40 && joineryCount <= 80) {
                                orderSum = orderSum * 0.94;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 80) {
                                orderSum = orderSum * 0.90;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            }
                        } else if (joineryCount > 99) {
                            joineryPrice = 140;
                            orderSum = joineryCount * joineryPrice;
                            orderSum = orderSum * 0.90;
                            orderSum = orderSum * 0.96;
                            console.log(`${orderSum.toFixed(2)} BGN`);

                        }
                        break;
                    case "With delivery":
                        if (joineryCount <= 99) {
                            joineryPrice = 140;
                            orderSum = joineryCount * joineryPrice;
                            if (joineryCount <= 40) {
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 40 && joineryCount <= 80) {
                                orderSum = orderSum * 0.94;
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 80) {
                                orderSum = orderSum * 0.90;
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            }
                        } else if (joineryCount > 99) {
                            joineryPrice = 140;
                            orderSum = joineryCount * joineryPrice;

                            orderSum = orderSum * 0.90;
                            orderSum = orderSum + 60;
                            orderSum = orderSum * 0.96;
                            console.log(`${orderSum.toFixed(2)} BGN`);

                        }
                        break;
                }
                break;
            case "130X180":
                switch (deliveryType) {
                    case "Without delivery":
                        if (joineryCount <= 99) {
                            joineryPrice = 190;
                            orderSum = joineryCount * joineryPrice;
                            if (joineryCount <= 20) {
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 20 && joineryCount <= 50) {
                                orderSum = orderSum * 0.93;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 50) {
                                orderSum = orderSum * 0.88;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            }
                        } else if (joineryCount > 99) {
                            joineryPrice = 190;
                            orderSum = joineryCount * joineryPrice;
                            orderSum = orderSum * 0.88;
                            orderSum = orderSum * 0.96;
                            console.log(`${orderSum.toFixed(2)} BGN`);

                        }
                        break;
                    case "With delivery":
                        if (joineryCount <= 99) {
                            joineryPrice = 190;
                            orderSum = joineryCount * joineryPrice;
                            if (joineryCount <= 20) {
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 20 && joineryCount <= 50) {
                                orderSum = orderSum * 0.93;
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 50) {
                                orderSum = orderSum * 0.88;
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            }
                        } else if (joineryCount > 99) {
                            joineryPrice = 190;
                            orderSum = joineryCount * joineryPrice;

                            orderSum = orderSum * 0.88;
                            orderSum = orderSum + 60;
                            orderSum = orderSum * 0.96;
                            console.log(`${orderSum.toFixed(2)} BGN`);

                        }
                        break;
                }
                break;
            case "200X300":
                switch (deliveryType) {
                    case "Without delivery":
                        if (joineryCount <= 99) {
                            joineryPrice = 250;
                            orderSum = joineryCount * joineryPrice;
                            if (joineryCount <= 25) {
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 25 && joineryCount <= 50) {
                                orderSum = orderSum * 0.91;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 50) {
                                orderSum = orderSum * 0.86;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            }
                        } else if (joineryCount > 99) {
                            joineryPrice = 250;
                            orderSum = joineryCount * joineryPrice;
                            orderSum = orderSum * 0.86;
                            orderSum = orderSum * 0.96;
                            console.log(`${orderSum.toFixed(2)} BGN`);

                        }
                        break;
                    case "With delivery":
                        if (joineryCount <= 99) {
                            joineryPrice = 250;
                            orderSum = joineryCount * joineryPrice;
                            if (joineryCount <= 25) {
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 25 && joineryCount <= 50) {
                                orderSum = orderSum * 0.91;
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            } else if (joineryCount > 50) {
                                orderSum = orderSum * 0.86;
                                orderSum = orderSum + 60;
                                console.log(`${orderSum.toFixed(2)} BGN`);
                            }
                        } else if (joineryCount > 99) {
                            joineryPrice = 250;
                            orderSum = joineryCount * joineryPrice;

                            orderSum = orderSum * 0.86;
                            orderSum = orderSum + 60;
                            orderSum = orderSum * 0.96;
                            console.log(`${orderSum.toFixed(2)} BGN`);

                        }
                        break;
                }
                break;
        }
    }



}

aluminumJoinery(["40", "90X130", "Without delivery"]);