# LeetCode Meter

**LeetCode Meter** is a web application that allows users to track their LeetCode problem-solving progress. By entering a LeetCode username, the app fetches and displays the user's statistics, including the number of easy, medium, and hard problems solved. The progress for each problem category is visually represented using circular progress indicators styled with CSS conic gradients.

## Features

- **Username Validation**: Ensures the inputted LeetCode username follows the required format.
- **API Integration**: Fetches user statistics using the [LeetCode Stats API](https://leetcode-stats-api.herokuapp.com/).
- **Visual Progress Indicators**: Displays the percentage of solved problems for each difficulty level (Easy, Medium, Hard) using animated progress circles.
- **Responsive Design**: The interface is designed to be user-friendly across different screen sizes.

## Demo

![LeetCode Meter Screenshot](https://ibb.co/HXr1D0D)  
*A screenshot of the LeetCode Meter showing user progress.*

## How to Use

1. Clone the repository to your local machine:
    ```bash          
    git clone https://github.com/Nohit594/LeetCode-Meter.git
    ```

2. Open the `index.html` file in your preferred web browser.

3. Enter a valid LeetCode username in the input field and click the "Search" button to view the user's problem-solving statistics.

## Code Overview

### HTML Structure
- A simple HTML structure with a search input field and placeholders for progress stats (easy, medium, hard).
  
### JavaScript (Progress Tracking Logic)
- **Validation**: Ensures that a valid LeetCode username is entered.
- **API Call**: Uses the Fetch API to retrieve user data from the LeetCode Stats API.
- **Progress Calculation**: Computes the percentage of problems solved for each difficulty category and updates the conic gradient to reflect the progress visually.

### CSS (Styling and Progress Circle)
- The progress circles are created using CSS `conic-gradient`, which changes dynamically based on the user's progress in different problem categories.

```css      
.circle {
    background: conic-gradient(#299f5d var(--progress-degree, 0%), #283a2e 0%);
}
```

## Dependencies

This project has no external dependencies. All functionality is implemented using vanilla HTML, CSS, and JavaScript.

## Future Enhancements

- **User Rank Display**: Add a feature to show the user's global ranking on LeetCode.
- **Time-based Progress**: Show how a user's progress has evolved over time with graphs.
- **Problem Lists**: Provide a list of unsolved or attempted problems based on user statistics.

## Contributing

Contributions are welcome! If you have any ideas, feel free to fork the repository and submit a pull request.

1. Fork the project
2. Create your feature branch:
    ```bash                  
    git checkout -b feature/my-new-feature
    ```
3. Commit your changes:
    ```bash                  
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash                  
    git push origin feature/my-new-feature
    ```
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

