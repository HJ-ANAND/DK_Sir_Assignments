function runFeedbackAnalyzer() {

    let feedback = [
        "good service",
        "very fast delivery",
        "good quality product",
        "average experience",
        "good support"
    ];

    let upperComments = feedback.map(comment => comment.toUpperCase());

    let goodComments = feedback.filter(comment => comment.indexOf("good") !== -1);

    alert(
        "Original Feedback:\n" + feedback.join("\n") +
        "\n\nUppercase Feedback:\n" + upperComments.join("\n") +
        "\n\nComments containing 'good':\n" + goodComments.join("\n")
    );

    console.log("Original Feedback:", feedback);
    console.log("Uppercase Feedback:", upperComments);
    console.log("Comments containing 'good':", goodComments);
}