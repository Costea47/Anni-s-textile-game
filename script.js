class Slide1 extends Phaser.Scene {
  constructor() {
    super("Slide1");
  }

  preload() {
    this.load.image(
      "backdrop",
      "https://play.rosebud.ai/assets/alexander-grey-Th_WZMUPnO4-unsplash (1).jpg?dR4r"
    );
  }

  create() {
    // Add the backdrop image
    const backdrop = this.add.image(400, 300, "backdrop");

    // Scale the image to cover the entire scene
    backdrop.setDisplaySize(800, 600);

    // Set the background color to black (in case the image doesn't cover the entire scene)
    this.cameras.main.setBackgroundColor("#000000");

    // Add a black rectangle behind the text
    const rectWidth = 400;
    const rectHeight = 100;
    const rect = this.add.rectangle(400, 300, rectWidth, rectHeight, 0x000000);
    rect.setAlpha(0.7); // Make it slightly transparent

    // Add the text "Anni's Textile Game" to the center of the scene
    const text = this.add.text(400, 300, "Anni's Textile Game", {
      fontFamily: "Arial",
      fontSize: "40px", // Increased from 32px
      color: "#ffffff",
      align: "center",
      fontStyle: "bold",
    });
    text.setOrigin(0.5, 0.5); // Center the text

    // Add "Next Slide" button
    const nextButton = this.add.text(400, 450, "Next Slide", {
      fontFamily: "Arial",
      fontSize: "28px", // Increased from 24px
      color: "#ffffff",
      backgroundColor: "#4a4a4a",
      padding: {
        left: 10,
        right: 10,
        top: 5,
        bottom: 5,
      },
    });
    nextButton.setOrigin(0.5);
    nextButton.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect
    nextButton.on("pointerover", () => {
      nextButton.setStyle({
        backgroundColor: "#6a6a6a",
      });
    });
    nextButton.on("pointerout", () => {
      nextButton.setStyle({
        backgroundColor: "#4a4a4a",
      });
    });

    // Add click event to move to next slide
    nextButton.on("pointerdown", () => {
      this.scene.start("Slide2");
    });
  }
}

class Slide2 extends Phaser.Scene {
  constructor() {
    super("Slide2");
  }

  preload() {
    this.load.image(
      "backdrop2",
      "https://play.rosebud.ai/assets/jacinta-christos-BDJy8J3R4GY-unsplash.jpg?GviU"
    );
    this.load.image(
      "anni",
      "https://play.rosebud.ai/assets/generate image of anni albers.png?m5Sp"
    );
  }

  create() {
    // Add the backdrop image
    const backdrop = this.add.image(400, 300, "backdrop2");
    // Scale the image to cover the entire scene
    backdrop.setDisplaySize(800, 600);
    // Set the background color to black (in case the image doesn't cover the entire scene)
    this.cameras.main.setBackgroundColor("#000000");
    // Add the text "Meet Anni Albers" to the top of the scene
    const titleText = this.add.text(400, 50, "Meet Anni Albers", {
      fontFamily: "Arial",
      fontSize: "40px",
      color: "#000000",
      align: "center",
      fontStyle: "bold",
    });
    titleText.setOrigin(0.5, 0.5); // Center the text horizontally
    // Add the image of Anni Albers to the left side of the scene
    const anniImage = this.add.image(150, 300, "anni");
    anniImage.setOrigin(0.5);
    // Scale the image to fit nicely on the left side
    anniImage.setDisplaySize(300, 400);
    // Add a rectangle to wrap around the descriptive text
    const textRect = this.add.rectangle(520, 285, 420, 420, 0xffffff, 0.7);
    textRect.setStrokeStyle(2, 0x000000);
    // Add the descriptive text to the right of the image
    const descText = this.add.text(
      320,
      120,
      "Anni Albers (1899–1994) was a groundbreaking textile artist, designer, and educator, known for her innovative approach to weaving and her contributions to modern art and design.\n\nPlay this engaging pattern matcher game to learn more about Anni! You will be given a reference fabric, and must quickly choose matching patterns from a selection of textiles to unlock more facts about her. Ready?",
      {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#000000",
        align: "left",
        wordWrap: {
          width: 400,
        },
      }
    );
    descText.setOrigin(0, 0); // Align to top-left
    // Add "Next Slide" button
    const nextButton = this.add.text(400, 550, "Next Slide", {
      fontFamily: "Arial",
      fontSize: "28px", // Increased from 24px
      color: "#ffffff",
      backgroundColor: "#4a4a4a",
      padding: {
        left: 10,
        right: 10,
        top: 5,
        bottom: 5,
      },
    });
    nextButton.setOrigin(0.5);
    nextButton.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect
    nextButton.on("pointerover", () => {
      nextButton.setStyle({
        backgroundColor: "#6a6a6a",
      });
    });
    nextButton.on("pointerout", () => {
      nextButton.setStyle({
        backgroundColor: "#4a4a4a",
      });
    });

    // Update the click event to move to Slide3
    nextButton.on("pointerdown", () => {
      this.scene.start("Slide3");
    });
  }
}

class Slide3 extends Phaser.Scene {
  constructor() {
    super("Slide3");
  }

  preload() {
    this.load.image(
      "pattern",
      "https://play.rosebud.ai/assets/A simple textile pattern in the style of Anni Albers.png?yOJu"
    );
    this.load.image(
      "backdrop3",
      "https://play.rosebud.ai/assets/jacinta-christos-BDJy8J3R4GY-unsplash.jpg?GviU"
    );
    this.load.image(
      "centerImage",
      "https://play.rosebud.ai/assets/nicola-perantoni-MrOlgmpySg8-unsplash.jpg?O4Cc"
    );
  }

  create() {
    // Add the backdrop image
    const backdrop = this.add.image(400, 300, "backdrop3");

    // Scale the image to cover the entire scene
    backdrop.setDisplaySize(800, 600);

    // Set the background color to black (in case the image doesn't cover the entire scene)
    this.cameras.main.setBackgroundColor("#000000");

    // Add the Anni Albers-style pattern
    const pattern = this.add.image(400, 300, "pattern");
    pattern.setDisplaySize(600, 400);

    // Add the new center image
    const centerImage = this.add.image(400, 300, "centerImage");
    centerImage.setOrigin(0.5);

    // Scale the center image to fit nicely, now slightly smaller
    centerImage.setDisplaySize(350, 262.5);

    // Add the "Remember!" text to the top of the scene
    const rememberText = this.add.text(400, 50, "Remember!", {
      fontFamily: "Arial",
      fontSize: "40px", // Increased from 32px
      color: "#000000",
      align: "center",
      fontStyle: "bold",
    });
    rememberText.setOrigin(0.5, 0.5); // Center the text horizontally

    // Set a timer to transition to Slide4 after 1 second
    this.time.delayedCall(1000, () => {
      this.scene.start("Slide4");
    });
  }
}

class Slide4 extends Phaser.Scene {
  constructor() {
    super("Slide4");
  }

  preload() {
    this.load.image(
      "backdrop4",
      "https://play.rosebud.ai/assets/jacinta-christos-BDJy8J3R4GY-unsplash.jpg?GviU"
    );
    this.load.image(
      "leftImage",
      "https://play.rosebud.ai/assets/nicola-perantoni-MrOlgmpySg8-unsplash.jpg?O4Cc"
    );
    this.load.image(
      "rightImage",
      "https://play.rosebud.ai/assets/bangsal-nam-9HMGyZJfrk8-unsplash.jpg?kiUn"
    );
  }

  create() {
    // Add the backdrop image
    const backdrop = this.add.image(400, 300, "backdrop4");

    // Scale the image to cover the entire scene
    backdrop.setDisplaySize(800, 600);

    // Set the background color to black (in case the image doesn't cover the entire scene)
    this.cameras.main.setBackgroundColor("#000000");

    // Add the question text to the top of the scene
    this.questionText = this.add.text(
      400,
      50,
      "Which fabric did you just see?",
      {
        fontFamily: "Arial",
        fontSize: "40px", // Increased from 32px
        color: "#000000",
        align: "center",
        fontStyle: "bold",
      }
    );
    this.questionText.setOrigin(0.5, 0.5); // Center the text horizontally

    // Add the left image
    const leftImage = this.add.image(150, 300, "leftImage");
    leftImage.setOrigin(0.5);

    // Scale the left image to fit nicely on the left side
    leftImage.setDisplaySize(200, 266);

    // Make left image interactive
    leftImage.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect for left image
    leftImage.on("pointerover", () => {
      leftImage.setTint(0xdddddd);
    });
    leftImage.on("pointerout", () => {
      leftImage.clearTint();
    });

    // Add click event for left image
    leftImage.on("pointerdown", () => {
      console.log("Left image clicked");
      this.displayCorrectText();
    });

    // Add the right image
    const rightImage = this.add.image(650, 300, "rightImage");
    rightImage.setOrigin(0.5);

    // Scale the right image to fit nicely on the right side
    rightImage.setDisplaySize(200, 266);

    // Make right image interactive
    rightImage.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect for right image
    rightImage.on("pointerover", () => {
      rightImage.setTint(0xdddddd);
    });
    rightImage.on("pointerout", () => {
      rightImage.clearTint();
    });

    // Add click event for right image
    rightImage.on("pointerdown", () => {
      console.log("Right image clicked");
      this.displayIncorrectText();
    });

    // Add "Next Slide" button in the bottom right corner
    this.nextButton = this.add.text(780, 580, "Next Slide", {
      fontFamily: "Arial",
      fontSize: "28px",
      color: "#ffffff",
      backgroundColor: "#4a4a4a",
      padding: {
        left: 10,
        right: 10,
        top: 5,
        bottom: 5,
      },
    });
    this.nextButton.setOrigin(1, 1); // Set origin to bottom-right corner
    this.nextButton.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect
    this.nextButton.on("pointerover", () => {
      this.nextButton.setStyle({
        backgroundColor: "#6a6a6a",
      });
    });
    this.nextButton.on("pointerout", () => {
      this.nextButton.setStyle({
        backgroundColor: "#4a4a4a",
      });
    });

    // Add click event to move to next slide (you'll need to create Slide5)
    this.nextButton.on("pointerdown", () => {
      this.scene.start("Slide5");
    });
  }

  displayCorrectText() {
    // Remove existing question text
    if (this.questionText) {
      this.questionText.destroy();
    }

    // Remove existing feedback text and rectangle
    if (this.feedbackText) {
      this.feedbackText.destroy();
    }
    if (this.feedbackRect) {
      this.feedbackRect.destroy();
    }

    // Add a light blue rectangle behind the text
    this.feedbackRect = this.add.rectangle(400, 500, 700, 130, 0xadd8e6);
    this.feedbackRect.setOrigin(0.5, 0.5);

    // Add the correct text near the bottom of the screen
    this.feedbackText = this.add.text(
      400,
      500,
      "Correct! Did you know that Albers was born in Berlin, Germany, into a Jewish family? She also combined traditional craft with modernist principles, experimenting with materials and techniques to create geometric patterns that blended art and function.",
      {
        fontFamily: "Arial",
        fontSize: "24px", // Increased from 20px
        color: "#000000",
        align: "center",
        wordWrap: {
          width: 650,
        },
      }
    );
    this.feedbackText.setOrigin(0.5, 0.5);
  }

  displayIncorrectText() {
    // Remove existing question text
    if (this.questionText) {
      this.questionText.destroy();
    }

    // Remove existing feedback text and rectangle
    if (this.feedbackText) {
      this.feedbackText.destroy();
    }
    if (this.feedbackRect) {
      this.feedbackRect.destroy();
    }

    // Add a light blue rectangle behind the text
    this.feedbackRect = this.add.rectangle(400, 500, 700, 130, 0xadd8e6);
    this.feedbackRect.setOrigin(0.5, 0.5);

    // Add the incorrect text near the bottom of the screen
    this.feedbackText = this.add.text(
      400,
      500,
      "Incorrect! Try again to unlock the fact about Anni Albers.",
      {
        fontFamily: "Arial",
        fontSize: "24px", // Increased from 20px
        color: "#000000",
        align: "center",
        wordWrap: {
          width: 650,
        },
      }
    );
    this.feedbackText.setOrigin(0.5, 0.5);
  }
}

class Slide5 extends Phaser.Scene {
  constructor() {
    super("Slide5");
  }

  preload() {
    this.load.image(
      "backdrop5",
      "https://play.rosebud.ai/assets/jacinta-christos-BDJy8J3R4GY-unsplash.jpg?GviU"
    );
    this.load.image(
      "centerImage5",
      "https://play.rosebud.ai/assets/tamanna-rumee-AD-oSUTqiB8-unsplash.jpg?c2JO"
    );
  }

  create() {
    // Add the backdrop image
    const backdrop = this.add.image(400, 300, "backdrop5");

    // Scale the image to cover the entire scene
    backdrop.setDisplaySize(800, 600);

    // Set the background color to black (in case the image doesn't cover the entire scene)
    this.cameras.main.setBackgroundColor("#000000");

    // Ad the new center image
    const centerImage = this.add.image(400, 300, "centerImage5");
    centerImage.setOrigin(0.5);

    //
    // Scale the center image to fit nicely in the center, now smaller
    centerImage.setDisplaySize(300, 300);

    // Set a timer to transition to Slide6 after 0.75 seconds
    this.time.delayedCall(750, () => {
      this.scene.start("Slide6");
    });
  }
}

class Slide6 extends Phaser.Scene {
  constructor() {
    super("Slide6");
  }

  preload() {
    this.load.image(
      "backdrop6",
      "https://play.rosebud.ai/assets/jacinta-christos-BDJy8J3R4GY-unsplash.jpg?GviU"
    );
    this.load.image(
      "leftImage6",
      "https://play.rosebud.ai/assets/tamanna-rumee-DOjTWY-QnUY-unsplash.jpg?uinA"
    );
    this.load.image(
      "centerImage6",
      "https://play.rosebud.ai/assets/isabela-martin-GworFf_S_ik-unsplash.jpg?3mMB"
    );
    this.load.image(
      "rightImage6",
      "https://play.rosebud.ai/assets/tamanna-rumee-AD-oSUTqiB8-unsplash.jpg?c2JO"
    );
  }

  create() {
    // Add the backdrop image
    const backdrop = this.add.image(400, 300, "backdrop6");

    // Scale the image to cover the entire scene
    backdrop.setDisplaySize(800, 600);

    // Set the background color to black (in case the image doesn't cover the entire scene)
    this.cameras.main.setBackgroundColor("#000000");

    // Add the question text to the top of the scene
    const questionText = this.add.text(
      400,
      50,
      "Which fabric did you just see?",
      {
        fontFamily: "Arial",
        fontSize: "40px", // Increased from 32px
        color: "#000000",
        align: "center",
        fontStyle: "bold",
      }
    );
    questionText.setOrigin(0.5, 0.5); // Center the text horizontally

    // Add the new left image
    const leftImage = this.add.image(150, 300, "leftImage6");
    leftImage.setOrigin(0.5);

    // Scale the left image to fit nicely on the left side, now smaller
    leftImage.setDisplaySize(200, 267);

    // Make left image interactive
    leftImage.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect for left image
    leftImage.on("pointerover", () => {
      leftImage.setTint(0xdddddd);
    });
    leftImage.on("pointerout", () => {
      leftImage.clearTint();
    });

    // Add click event for left image
    leftImage.on("pointerdown", () => {
      console.log("Left image clicked");
      this.handleImageClick("left");
    });

    // Add the new center image
    const centerImage = this.add.image(400, 300, "centerImage6");
    centerImage.setOrigin(0.5);

    // Scale the center image to fit nicely in the center, with the same dimensions as the left image
    centerImage.setDisplaySize(200, 267);

    // Make center image interactive
    centerImage.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect for center image
    centerImage.on("pointerover", () => {
      centerImage.setTint(0xdddddd);
    });
    centerImage.on("pointerout", () => {
      centerImage.clearTint();
    });

    // Add click event for center image
    centerImage.on("pointerdown", () => {
      console.log("Center image clicked");
      this.handleImageClick("center");
    });

    // Add the new right image
    const rightImage = this.add.image(650, 300, "rightImage6");
    rightImage.setOrigin(0.5);

    // Scale the right image to fit nicely on the right side, with the same dimensions as the other images
    rightImage.setDisplaySize(200, 267);

    // Make right image interactive
    rightImage.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect for right image
    rightImage.on("pointerover", () => {
      rightImage.setTint(0xdddddd);
    });
    rightImage.on("pointerout", () => {
      rightImage.clearTint();
    });

    // Add click event for right image
    rightImage.on("pointerdown", () => {
      console.log("Right image clicked");
      this.handleImageClick("right");
    });

    // Add "Next Slide" button in the bottom right corner
    const nextButton = this.add.text(780, 580, "Next Slide", {
      fontFamily: "Arial",
      fontSize: "28px",
      color: "#ffffff",
      backgroundColor: "#4a4a4a",
      padding: {
        left: 10,
        right: 10,
        top: 5,
        bottom: 5,
      },
    });
    nextButton.setOrigin(1, 1); // Set origin to bottom-right corner
    nextButton.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect
    nextButton.on("pointerover", () => {
      nextButton.setStyle({
        backgroundColor: "#6a6a6a",
      });
    });
    nextButton.on("pointerout", () => {
      nextButton.setStyle({
        backgroundColor: "#4a4a4a",
      });
    });

    // Add click event to move to Slide7
    nextButton.on("pointerdown", () => {
      this.scene.start("Slide7");
    });
  }

  handleImageClick(position) {
    if (position === "left" || position === "center") {
      this.displayMessage(
        "Incorrect! Try again to unlock more facts about Albers."
      );
    } else if (position === "right") {
      this.displayMessage(
        'Correct! You\'ve unlocked a new fact: Anni Albers authored several influential texts, including "On Weaving", which remains a seminal work in textile art theory. Her work was widely exhibited, and she became the first textile artist to have a solo show at the Museum of Modern Art in New York in 1949.'
      );
    }
  }

  displayMessage(message) {
    // Remove existing message if there is one
    if (this.messageText) {
      this.messageText.destroy();
    }

    // Add a semi-transparent black rectangle behind the text
    if (this.messageBackground) {
      this.messageBackground.destroy();
    }
    this.messageBackground = this.add.rectangle(
      400,
      500,
      780,
      160,
      0x000000,
      0.7
    );

    // Add the message text
    this.messageText = this.add.text(400, 500, message, {
      fontFamily: "Arial",
      fontSize: "24px", // Increased from 20px
      color: "#ffffff",
      align: "center",
      wordWrap: {
        width: 760,
      },
    });
    this.messageText.setOrigin(0.5);
  }
}

class Slide7 extends Phaser.Scene {
  constructor() {
    super("Slide7");
  }

  preload() {
    this.load.image(
      "backdrop7",
      "https://play.rosebud.ai/assets/jacinta-christos-BDJy8J3R4GY-unsplash.jpg?GviU"
    );
    this.load.image(
      "centerImage7",
      "https://play.rosebud.ai/assets/redicul-pict-sxUfRNZNVLM-unsplash.jpg?ELXE"
    );
  }

  create() {
    // Add the backdrop image
    const backdrop = this.add.image(400, 300, "backdrop7");

    // Scale the image to cover the entire scene
    backdrop.setDisplaySize(800, 600);

    // Set the background color to black (in case the image doesn't cover the entire scene)
    this.cameras.main.setBackgroundColor("#000000");

    // Add the center image
    const centerImage = this.add.image(400, 300, "centerImage7");
    centerImage.setOrigin(0.5);

    // Scale the center image to fit nicely in the center, now smaller
    centerImage.setDisplaySize(300, 300);

    // Set a timer to transition to Slide8 after 0.5 seconds
    this.time.delayedCall(500, () => {
      this.scene.start("Slide8");
    });
  }
}

class Slide8 extends Phaser.Scene {
  constructor() {
    super("Slide8");
  }

  preload() {
    this.load.image(
      "backdrop8",
      "https://play.rosebud.ai/assets/jacinta-christos-BDJy8J3R4GY-unsplash.jpg?GviU"
    );
    this.load.image(
      "leftImage8",
      "https://play.rosebud.ai/assets/redicul-pict-cD5Stq5ggS0-unsplash.jpg?jcJF"
    );
    this.load.image(
      "centerImage8",
      "https://play.rosebud.ai/assets/redicul-pict-sxUfRNZNVLM-unsplash.jpg?ELXE"
    );
    this.load.image(
      "rightImage8",
      "https://play.rosebud.ai/assets/cat-han-W_5Eakb1598-unsplash.jpg?q3Aw"
    );
  }

  create() {
    // Add the backdrop image
    const backdrop = this.add.image(400, 300, "backdrop8");

    // Scale the image to cover the entire scene
    backdrop.setDisplaySize(800, 600);

    // Set the background color to black (in case the image doesn't cover the entire scene)
    this.cameras.main.setBackgroundColor("#000000");

    // Add the question text to the top of the scene
    const questionText = this.add.text(
      400,
      50,
      "Which fabric did you just see?",
      {
        fontFamily: "Arial",
        fontSize: "40px", // Increased from 32px
        color: "#000000",
        align: "center",
        fontStyle: "bold",
      }
    );
    questionText.setOrigin(0.5, 0.5); // Center the text horizontally

    // Add the new left image
    const leftImage = this.add.image(150, 300, "leftImage8");
    leftImage.setOrigin(0.5);

    // Scale the left image to fit nicely on the left side, now smaller
    leftImage.setDisplaySize(200, 267);

    // Make left image interactive
    leftImage.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect for left image
    leftImage.on("pointerover", () => {
      leftImage.setTint(0xdddddd);
    });
    leftImage.on("pointerout", () => {
      leftImage.clearTint();
    });

    // Add click event for left image
    leftImage.on("pointerdown", () => {
      console.log("Left image clicked");
      this.handleImageClick("left");
    });

    // Add the new center image
    const centerImage = this.add.image(400, 300, "centerImage8");
    centerImage.setOrigin(0.5);

    // Scale the center image to fit nicely in the center, with the same dimensions as the left image
    centerImage.setDisplaySize(200, 267);

    // Make center image interactive
    centerImage.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect for center image
    centerImage.on("pointerover", () => {
      centerImage.setTint(0xdddddd);
    });
    centerImage.on("pointerout", () => {
      centerImage.clearTint();
    });

    // Add click event for center image
    centerImage.on("pointerdown", () => {
      console.log("Center image clicked");
      this.handleImageClick("center");
    });

    // Add the new right image
    const rightImage = this.add.image(650, 300, "rightImage8");
    rightImage.setOrigin(0.5);

    // Scale the right image to fit nicely on the right side, with the same dimensions as the other images
    rightImage.setDisplaySize(200, 267);

    // Make right image interactive
    rightImage.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect for right image
    rightImage.on("pointerover", () => {
      rightImage.setTint(0xdddddd);
    });
    rightImage.on("pointerout", () => {
      rightImage.clearTint();
    });

    // Add click event for right image
    rightImage.on("pointerdown", () => {
      console.log("Right image clicked");
      this.handleImageClick("right");
    });

    // Add "Next Slide" button in the bottom right corner
    const nextButton = this.add.text(780, 580, "Next Slide", {
      fontFamily: "Arial",
      fontSize: "28px",
      color: "#ffffff",
      backgroundColor: "#4a4a4a",
      padding: {
        left: 10,
        right: 10,
        top: 5,
        bottom: 5,
      },
    });
    nextButton.setOrigin(1, 1); // Set origin to bottom-right corner
    nextButton.setInteractive({
      useHandCursor: true,
    });

    // Add hover effect
    nextButton.on("pointerover", () => {
      nextButton.setStyle({
        backgroundColor: "#6a6a6a",
      });
    });
    nextButton.on("pointerout", () => {
      nextButton.setStyle({
        backgroundColor: "#4a4a4a",
      });
    });

    // Add click event to move to Slide9
    nextButton.on("pointerdown", () => {
      this.scene.start("Slide9");
    });
  }

  handleImageClick(position) {
    if (position === "left" || position === "right") {
      this.displayMessage(
        "Incorrect! Try again to unlock more facts about Albers."
      );
    } else if (position === "center") {
      this.displayMessage(
        "Correct! You've unlocked a new fact: Albers' work has had a lasting impact on both the fine arts and design worlds, influencing generations of artists and designers. She is celebrated for elevating textile art to the status of fine art and bridging the gap between craft and modernism."
      );
    }
  }

  displayMessage(message) {
    // Remove existing message if there is one
    if (this.messageText) {
      this.messageText.destroy();
    }

    // Add a semi-transparent black rectangle behind the text
    if (this.messageBackground) {
      this.messageBackground.destroy();
    }
    this.messageBackground = this.add.rectangle(
      400,
      500,
      780,
      160,
      0x000000,
      0.7
    );

    // Add the message text
    this.messageText = this.add.text(400, 500, message, {
      fontFamily: "Arial",
      fontSize: "24px", // Increased from 20px
      color: "#ffffff",
      align: "center",
      wordWrap: {
        width: 760,
      },
    });
    this.messageText.setOrigin(0.5);
  }
}

class Slide9 extends Phaser.Scene {
  constructor() {
    super("Slide9");
  }
  preload() {
    this.load.image(
      "backdrop9",
      "https://play.rosebud.ai/assets/jacinta-christos-BDJy8J3R4GY-unsplash.jpg?6Zf5"
    );
    this.load.image(
      "anni_avatar",
      "https://play.rosebud.ai/assets/generate image of anni albers.png?m5Sp"
    );
  }
  create() {
    // Add the backdrop image
    const backdrop = this.add.image(400, 300, "backdrop9");
    backdrop.setDisplaySize(800, 600);
    // Set the background color to black (in case the image doesn't cover the entire scene)
    this.cameras.main.setBackgroundColor("#000000");
    // Add Anni Albers avatar
    const avatar = this.add.image(150, 300, "anni_avatar");
    avatar.setDisplaySize(300, 300);
    // Add chat interface
    const chatBox = this.add.rectangle(550, 300, 450, 500, 0xffffff);
    chatBox.setStrokeStyle(2, 0x000000);
    // Add chat title
    this.add
      .text(550, 75, "Chat with Anni Albers", {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#000000",
        align: "center",
      })
      .setOrigin(0.5);
    // Pre-defined questions
    const questions = [
      "Tell me about your early life.",
      "What inspired your textile work?",
      "How did you approach teaching?",
      "What was your experience at the Bauhaus?",
    ];
    // Add question buttons
    questions.forEach((question, index) => {
      const button = this.add
        .text(350, 150 + index * 50, question, {
          fontFamily: "Arial",
          fontSize: "16px",
          color: "#000000",
          backgroundColor: "#cccccc",
          padding: {
            left: 10,
            right: 10,
            top: 5,
            bottom: 5,
          },
        })
        .setInteractive();
      button.on("pointerdown", () => this.showAnswer(index));
    });
    // Add text area for answers
    this.answerText = this.add.text(350, 400, "", {
      fontFamily: "Arial",
      fontSize: "16px",
      color: "#000000",
      align: "left",
      wordWrap: {
        width: 400,
      },
    });

    // Add "Next Slide" button
    const nextButton = this.add.text(650, 550, "Next Slide", {
      fontFamily: "Arial",
      fontSize: "24px",
      color: "#ffffff",
      backgroundColor: "#4a4a4a",
      padding: {
        left: 10,
        right: 10,
        top: 5,
        bottom: 5,
      },
    });
    nextButton.setInteractive({
      useHandCursor: true,
    });
    nextButton.on("pointerover", () =>
      nextButton.setStyle({
        backgroundColor: "#6a6a6a",
      })
    );
    nextButton.on("pointerout", () =>
      nextButton.setStyle({
        backgroundColor: "#4a4a4a",
      })
    );
    nextButton.on("pointerdown", () => this.scene.start("Slide10"));
  }
  showAnswer(index) {
    const answers = [
      "I was born in Berlin in 1899 into a Jewish family. From an early age, I was interested in art, but it took me some time to find my medium.",
      "My textile work was inspired by the Bauhaus principle of merging art with functionality. I saw textiles as a way to explore color, texture, and pattern in a practical form.",
      "In my teaching, I emphasized experimentation and hands-on learning. I believed in pushing the boundaries of traditional techniques to discover new possibilities in textile art.",
      "The Bauhaus was transformative for me. Initially, I was discouraged from certain workshops due to gender biases, but in the weaving workshop, I found my true calling and began to revolutionize textile art.",
    ];
    this.answerText.setText(answers[index]);
  }
}
class Slide10 extends Phaser.Scene {
  constructor() {
    super("Slide10");
  }
  preload() {
    this.load.image(
      "backdrop10",
      "https://play.rosebud.ai/assets/jacinta-christos-BDJy8J3R4GY-unsplash.jpg?6Zf5"
    );
    this.load.image(
      "anni_avatar",
      "https://play.rosebud.ai/assets/generate image of anni albers.png?m5Sp"
    );
  }
  create() {
    // Add the backdrop image
    const backdrop = this.add.image(400, 300, "backdrop10");
    backdrop.setDisplaySize(800, 600);
    // Set the background color to black (in case the image doesn't cover the entire scene)
    this.cameras.main.setBackgroundColor("#000000");
    // Add Anni Albers avatar
    const avatar = this.add.image(170, 300, "anni_avatar");
    avatar.setDisplaySize(300, 300);
    // Add chat interface
    const chatBox = this.add.rectangle(550, 300, 450, 500, 0xffffff);
    chatBox.setStrokeStyle(2, 0x000000);
    // Add chat title
    this.add
      .text(550, 75, "Chat with Anni Albers", {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#000000",
        align: "center",
      })
      .setOrigin(0.5);
    // Create a scrollable container for chat history
    this.chatHistoryContainer = document.createElement("div");
    this.chatHistoryContainer.style =
      "width: 400px; height: 350px; overflow-y: auto; padding: 10px; background-color: rgba(255,255,255,0.8); font-family: Arial; font-size: 16px; color: #000000;";
    this.add.dom(550, 280, this.chatHistoryContainer);
    // Create HTML input element
    this.chatInput = document.createElement("input");
    this.chatInput.type = "text";
    this.chatInput.style = "width: 300px; padding: 5px; font-size: 16px;";
    this.chatInput.placeholder = "Type your message here...";
    // Add the input element to the DOM
    this.add.dom(500, 520, this.chatInput);
    // Add send button
    const sendButton = this.add
      .text(790, 520, "Send", {
        fontFamily: "Arial",
        fontSize: "18px",
        color: "#ffffff",
        backgroundColor: "#4a4a4a",
        padding: {
          left: 10,
          right: 10,
          top: 5,
          bottom: 5,
        },
      })
      .setInteractive({
        useHandCursor: true,
      });
    sendButton.on("pointerdown", () => this.handleUserInput());
    sendButton.on("pointerover", () =>
      sendButton.setStyle({
        backgroundColor: "#6a6a6a",
      })
    );
    sendButton.on("pointerout", () =>
      sendButton.setStyle({
        backgroundColor: "#4a4a4a",
      })
    );
    // Add event listener for 'Enter' key
    this.input.keyboard.on("keydown-ENTER", () => this.handleUserInput());
    // Add "Start Again" button
    const startAgainButton = this.add
      .text(650, 570, "Start Again", {
        fontFamily: "Arial",
        fontSize: "18px",
        color: "#ffffff",
        backgroundColor: "#4a4a4a",
        padding: {
          left: 10,
          right: 10,
          top: 5,
          bottom: 5,
        },
      })
      .setInteractive({
        useHandCursor: true,
      });
    startAgainButton.on("pointerdown", () => this.scene.start("Slide1"));
    startAgainButton.on("pointerover", () =>
      startAgainButton.setStyle({
        backgroundColor: "#6a6a6a",
      })
    );
    startAgainButton.on("pointerout", () =>
      startAgainButton.setStyle({
        backgroundColor: "#4a4a4a",
      })
    );
  }

  handleUserInput() {
    const userMessage = this.chatInput.value.trim();
    if (userMessage !== "") {
      this.updateChatHistory("User: " + userMessage);
      this.chatInput.value = "";
      this.getAnniResponse(userMessage);
    }
  }

  getAnniResponse(userMessage) {
    const lowercaseMessage = userMessage.toLowerCase();
    let response;
    // Check for greetings
    if (this.isGreeting(lowercaseMessage)) {
      response = this.getGreetingResponse();
    } else if (
      lowercaseMessage.includes("textile") ||
      lowercaseMessage.includes("weaving") ||
      lowercaseMessage.includes("fabric")
    ) {
      response =
        "Textiles were my true passion. I saw them as a way to explore color, texture, and pattern in a practical form. I often experimented with materials like jute, silk, and linen, creating pieces that blurred the line between art and functional design. My approach to textiles was deeply influenced by the Bauhaus philosophy of merging art with functionality.";
    } else if (
      lowercaseMessage.includes("bauhaus") ||
      lowercaseMessage.includes("school")
    ) {
      response =
        "The Bauhaus was truly transformative for me. I enrolled there in 1922 and studied under Gunta Stölzl in the weaving workshop. It's where I embraced weaving as my primary art form and began to explore the connection between fine art and craft. The Bauhaus philosophy of integrating art, craft, and technology had a profound impact on my work and career.";
    } else if (
      lowercaseMessage.includes("teach") ||
      lowercaseMessage.includes("education") ||
      lowercaseMessage.includes("student")
    ) {
      response =
        "Teaching was a significant part of my life, especially after moving to the United States. At Black Mountain College, I emphasized experimentation and hands-on learning. I believed in pushing the boundaries of traditional techniques to discover new possibilities in textile art. My approach was to encourage students to find their own path while providing them with a strong foundation in technique and theory.";
    } else if (
      lowercaseMessage.includes("art") ||
      lowercaseMessage.includes("design") ||
      lowercaseMessage.includes("create")
    ) {
      response =
        "I've always seen art and design as deeply interconnected. My work aimed to bridge the gap between fine art and functional design. I believed that textiles could be both practical and expressive, embodying the Bauhaus philosophy of integrating functionality with aesthetics. For me, the process of creation was as important as the final product, and I always sought to push the boundaries of what was possible with textiles.";
    } else if (
      lowercaseMessage.includes("early life") ||
      lowercaseMessage.includes("childhood") ||
      lowercaseMessage.includes("grow up")
    ) {
      response =
        "I was born in Berlin in 1899 into a well-off Jewish family. From an early age, I was encouraged to pursue the arts, but it took me some time to find my medium. The Bauhaus provided the direction I needed. My early experiences, including the cultural richness of Berlin and the challenges of finding my artistic voice, deeply influenced my later work and philosophy.";
    } else if (
      lowercaseMessage.includes("exhibition") ||
      lowercaseMessage.includes("museum") ||
      lowercaseMessage.includes("show")
    ) {
      response =
        "One of my proudest moments was having a solo exhibition at the Museum of Modern Art (MoMA) in New York in 1949. I was the first textile artist to receive this honor. It was a significant step in recognizing textile art as a form of fine art. Throughout my career, I had numerous exhibitions that helped elevate the status of textile work in the art world.";
    } else if (
      lowercaseMessage.includes("book") ||
      lowercaseMessage.includes("writing") ||
      lowercaseMessage.includes("publish")
    ) {
      response =
        "Writing was another way for me to share my ideas. My book 'On Weaving', published in 1965, remains an influential text in textile design and education. I aimed to share not just techniques, but also the philosophy behind weaving and its place in art and culture. Writing allowed me to articulate my thoughts on the intersection of art, craft, and design in a way that complemented my textile work.";
    } else if (
      lowercaseMessage.includes("influence") ||
      lowercaseMessage.includes("inspired") ||
      lowercaseMessage.includes("inspiration")
    ) {
      response =
        "I drew inspiration from many sources, particularly ancient textiles from pre-Columbian South America. Their use of color and texture deeply influenced my work. I believed in learning from tradition while pushing boundaries in modern design. Nature, architecture, and the interplay of different cultures also played a significant role in shaping my artistic vision.";
    } else if (
      lowercaseMessage.includes("color") ||
      lowercaseMessage.includes("pattern") ||
      lowercaseMessage.includes("technique")
    ) {
      response =
        "Color and pattern were central to my work. I explored how different combinations could create depth, movement, and emotion in textiles. My techniques often involved experimenting with unusual materials and pushing the boundaries of traditional weaving methods. I believed that the technical aspects of weaving were inseparable from its artistic potential.";
    } else if (
      lowercaseMessage.includes("legacy") ||
      lowercaseMessage.includes("impact") ||
      lowercaseMessage.includes("importance")
    ) {
      response =
        "I hope my legacy is seen in how I helped elevate textile art to be recognized alongside other fine arts. My work at the Bauhaus, my teachings, and my continual push to innovate in textiles have influenced generations of artists and designers. I believed in the power of textiles to be both functional and expressive, and I sought to demonstrate this throughout my career.";
    } else {
      response =
        "That's an interesting question. As an artist and teacher, I always encouraged looking at things from different perspectives. Could you perhaps rephrase your question in terms of how it relates to art, design, or the creative process? I'd be happy to share my thoughts on those areas.";
    }
    this.updateChatHistory("Anni: " + response);
    // If it wasn't a greeting, ask if they want to discuss specific topics
    if (!this.isGreeting(lowercaseMessage)) {
      this.askAboutTopics();
    }
  }
  isGreeting(message) {
    const greetings = [
      "hello",
      "hi",
      "hey",
      "greetings",
      "good morning",
      "good afternoon",
      "good evening",
    ];
    return greetings.some((greeting) => message.includes(greeting));
  }
  getGreetingResponse() {
    const greetings = [
      "Hello! It's wonderful to meet you.",
      "Greetings! I'm delighted to chat with you.",
      "Hi there! I'm always excited to discuss art and design.",
      "Welcome! I'm looking forward to our conversation.",
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }
  askAboutTopics() {
    const topicsQuestion =
      "\n\nWould you like to discuss any specific topics? I can share insights about textiles, the Bauhaus, my teaching experiences, or my artistic process. What interests you most?";
    this.updateChatHistory("Anni: " + topicsQuestion);
  }

  updateChatHistory(message) {
    const messageElement = document.createElement("p");
    messageElement.style = "margin: 5px 0;";
    messageElement.innerText = message;
    this.chatHistoryContainer.appendChild(messageElement);
    this.chatHistoryContainer.scrollTop =
      this.chatHistoryContainer.scrollHeight;
  }
}
const config = {
  type: Phaser.AUTO,
  parent: "renderDiv",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  width: 800,
  height: 600,
  scene: [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10,
  ],
  dom: {
    createContainer: true,
  },
};
window.phaserGame = new Phaser.Game(config);
