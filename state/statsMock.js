// mock for use until the DB is up and can be tested
const statsMock = {
  statsBoards: [
    {
      totalPoints: 117500,
      highestScore: 921,
      averageScore: 756,
      totalNumber: 321,
      averageNumber: 13,
      numberOfWordsGuessedWithNoHintsUsed: 23,
      longestLostStreak: 6,
      longestWinStreak: 13,
      numberOfWordsGuessedByLength: [
        { length: 3, Amount: 7 },
        { length: 4, Amount: 3 },
        { length: 5, Amount: 9 },
        { length: 6, Amount: 24 },
        { length: 7, Amount: 12 },
        { length: 8, Amount: 10 },
        { length: 9, Amount: 3 },
        { length: 10, Amount: 0 }
      ],
      numberOfWordsGuessedByDifficulty: [
        { difficulty: "easy", score: 35 },
        { difficulty: "medium", score: 25 },
        { difficulty: "hard", score: 55 }
      ],
      numberOfWordsGuessedByCategory: [
        { category: "animals", value: 14 },
        { category: "beverages", value: 12 },
        { category: "tools", value: 21 },
        { category: "occupations", value: 3 },
        { category: "birds", value: 4 },
        { category: "technology", value: 14 },
        { category: "math terms", value: 12 },
        { category: "plants", value: 46 },
        { category: "cooking terms", value: 20 },
        { category: "religion", value: 0 },
        { category: "periodic elements", value: 49 },
        { category: "sports", value: 12 },
        { category: "science", value: 76 },
        { category: "business", value: 31 },
        { category: "trees", value: 30 },
        { category: "musical instruments", value: 16 },
        { category: "politics", value: 12 },
        { category: "weather terms", value: 5 },
        { category: "clothing", value: 1 },
        { category: "medical", value: 7 },
        { category: "vegetables", value: 43 },
        { category: "anatomy", value: 4 },
        { category: "fruit", value: 0 },
        { category: "transportation", value: 26 },
        { category: "colors", value: 0 },
        { category: "food", value: 0 }
      ],
      percentCategoryComplete: [
        { category: "animal", percent: 12 },
        { category: "beverages", percent: 24 },
        { category: "tools", percent: 45 },
        { category: "occupations", percent: 2 },
        { category: "birds", percent: 0 },
        { category: "technology", percent: 99 },
        { category: "math terms", percent: 54 },
        { category: "plants", percent: 7 },
        { category: "cooking terms", percent: 12 },
        { category: "religion", percent: 40 },
        { category: "periodic elements", percent: 3 },
        { category: "sports", percent: 8 },
        { category: "science", percent: 10 },
        { category: "business", percent: 91 },
        { category: "trees", percent: 13 },
        { category: "musical instruments", percent: 35 },
        { category: "politics", percent: 12 },
        { category: "weather terms", percent: 1 },
        { category: "clothing", percent: 57 },
        { category: "medical", percent: 16 },
        { category: "vegetables", percent: 22 },
        { category: "anatomy", percent: 23 },
        { category: "fruit", percent: 91 },
        { category: "transportation", percent: 6 },
        { category: "colors", percent: 60 },
        { category: "food", percent: 91 }
      ]
    }, // end idx 0
    {
      totalPoints: 5621,
      highestScore: 811,
      averageScore: 526,
      totalNumber: 12,
      averageNumber: 3,
      numberOfWordsGuessedWithNoHintsUsed: 3,
      longestLostStreak: 1,
      longestWinStreak: 4,
      numberOfWordsGuessedByLength: [
        { length: 3, Amount: 7 },
        { length: 4, Amount: 1 },
        { length: 5, Amount: 0 },
        { length: 6, Amount: 0 },
        { length: 7, Amount: 5 },
        { length: 8, Amount: 16 },
        { length: 9, Amount: 26 },
        { length: 10, Amount: 4 }
      ],
      numberOfWordsGuessedByDifficulty: [
        { difficulty: "easy", score: 25 },
        { difficulty: "medium", score: 65 },
        { difficulty: "hard", score: 45 }
      ],
      numberOfWordsGuessedByCategory: [
        { category: "animals", value: 4 },
        { category: "beverages", value: 2 },
        { category: "tools", value: 1 },
        { category: "occupations", value: 90 },
        { category: "birds", value: 80 },
        { category: "technology", value: 40 },
        { category: "math terms", value: 12 },
        { category: "plants", value: 9 },
        { category: "cooking terms", value: 54 },
        { category: "religion", value: 20 },
        { category: "periodic elements", value: 0 },
        { category: "sports", value: 2 },
        { category: "science", value: 16 },
        { category: "business", value: 12 },
        { category: "trees", value: 37 },
        { category: "musical instruments", value: 99 },
        { category: "politics", value: 100 },
        { category: "weather terms", value: 100 },
        { category: "clothing", value: 12 },
        { category: "medical", value: 76 },
        { category: "vegetables", value: 43 },
        { category: "anatomy", value: 4 },
        { category: "fruit", value: 10 },
        { category: "transportation", value: 26 },
        { category: "colors", value: 0 },
        { category: "food", value: 0 }
      ],
      percentCategoryComplete: [
        { category: "animal", percent: 2 },
        { category: "beverages", percent: 42 },
        { category: "tools", percent: 24 },
        { category: "occupations", percent: 99 },
        { category: "birds", percent: 12 },
        { category: "technology", percent: 19 },
        { category: "math terms", percent: 38 },
        { category: "plants", percent: 72 },
        { category: "cooking terms", percent: 100 },
        { category: "religion", percent: 91 },
        { category: "periodic elements", percent: 32 },
        { category: "sports", percent: 10 },
        { category: "science", percent: 10 },
        { category: "business", percent: 54 },
        { category: "trees", percent: 99 },
        { category: "musical instruments", percent: 2 },
        { category: "politics", percent: 18 },
        { category: "weather terms", percent: 1 },
        { category: "clothing", percent: 0 },
        { category: "medical", percent: 0 },
        { category: "vegetables", percent: 0 },
        { category: "anatomy", percent: 22 },
        { category: "fruit", percent: 9 },
        { category: "transportation", percent: 65 },
        { category: "colors", percent: 60 },
        { category: "food", percent: 91 }
      ]
    },
    // end idx 1
    {
      totalPoints: 34231,
      highestScore: 856,
      averageScore: 721,
      totalNumber: 31,
      averageNumber: 13,
      numberOfWordsGuessedWithNoHintsUsed: 23,
      longestLostStreak: 6,
      longestWinStreak: 13,
      numberOfWordsGuessedByLength: [
        { length: 3, Amount: 2 },
        { length: 4, Amount: 5 },
        { length: 5, Amount: 3 },
        { length: 6, Amount: 12 },
        { length: 7, Amount: 3 },
        { length: 8, Amount: 14 },
        { length: 9, Amount: 6 },
        { length: 10, Amount: 4 }
      ],
      numberOfWordsGuessedByDifficulty: [
        { difficulty: "easy", score: 20 },
        { difficulty: "medium", score: 35 },
        { difficulty: "hard", score: 12 }
      ],
      numberOfWordsGuessedByCategory: [
        { category: "animals", value: 14 },
        { category: "beverages", value: 12 },
        { category: "tools", value: 21 },
        { category: "occupations", value: 3 },
        { category: "birds", value: 4 },
        { category: "technology", value: 14 },
        { category: "math terms", value: 12 },
        { category: "plants", value: 46 },
        { category: "cooking terms", value: 20 },
        { category: "religion", value: 0 },
        { category: "periodic elements", value: 49 },
        { category: "sports", value: 12 },
        { category: "science", value: 76 },
        { category: "business", value: 31 },
        { category: "trees", value: 30 },
        { category: "musical instruments", value: 16 },
        { category: "politics", value: 12 },
        { category: "weather terms", value: 5 },
        { category: "clothing", value: 1 },
        { category: "medical", value: 7 },
        { category: "vegetables", value: 43 },
        { category: "anatomy", value: 4 },
        { category: "fruit", value: 0 },
        { category: "transportation", value: 26 },
        { category: "colors", value: 0 },
        { category: "food", value: 0 }
      ],
      percentCategoryComplete: [
        { category: "animal", percent: 23 },
        { category: "beverages", percent: 14 },
        { category: "tools", percent: 34 },
        { category: "occupations", percent: 52 },
        { category: "birds", percent: 2 },
        { category: "technology", percent: 15 },
        { category: "math terms", percent: 22 },
        { category: "plants", percent: 7 },
        { category: "cooking terms", percent: 32 },
        { category: "religion", percent: 49 },
        { category: "periodic elements", percent: 3 },
        { category: "sports", percent: 89 },
        { category: "science", percent: 0 },
        { category: "business", percent: 27 },
        { category: "trees", percent: 13 },
        { category: "musical instruments", percent: 23 },
        { category: "politics", percent: 1 },
        { category: "weather terms", percent: 71 },
        { category: "clothing", percent: 50 },
        { category: "medical", percent: 16 },
        { category: "vegetables", percent: 2 },
        { category: "anatomy", percent: 22 },
        { category: "fruit", percent: 9 },
        { category: "transportation", percent: 65 },
        { category: "colors", percent: 60 },
        { category: "food", percent: 91 }
      ]
    },
    //end idx 2
    {
      totalPoints: 79231,
      highestScore: 901,
      averageScore: 678,
      totalNumber: 67,
      averageNumber: 13,
      numberOfWordsGuessedWithNoHintsUsed: 23,
      longestLostStreak: 6,
      longestWinStreak: 13,
      numberOfWordsGuessedByLength: [
        { length: 3, Amount: 2 },
        { length: 4, Amount: 5 },
        { length: 5, Amount: 3 },
        { length: 6, Amount: 12 },
        { length: 7, Amount: 3 },
        { length: 8, Amount: 14 },
        { length: 9, Amount: 6 },
        { length: 10, Amount: 4 }
      ],
      numberOfWordsGuessedByDifficulty: [
        { difficulty: "easy", score: 20 },
        { difficulty: "medium", score: 35 },
        { difficulty: "hard", score: 12 }
      ],
      numberOfWordsGuessedByCategory: [
        { category: "animals", value: 1 },
        { category: "beverages", value: 22 },
        { category: "tools", value: 3 },
        { category: "occupations", value: 9 },
        { category: "birds", value: 13 },
        { category: "technology", value: 42 },
        { category: "math terms", value: 1 },
        { category: "plants", value: 0 },
        { category: "cooking terms", value: 0 },
        { category: "religion", value: 0 },
        { category: "periodic elements", value: 0 },
        { category: "sports", value: 10 },
        { category: "science", value: 2 },
        { category: "business", value: 12 },
        { category: "trees", value: 0 },
        { category: "musical instruments", value: 6 },
        { category: "politics", value: 0 },
        { category: "weather terms", value: 0 },
        { category: "clothing", value: 0 },
        { category: "medical", value: 0 },
        { category: "vegetables", value: 32 },
        { category: "anatomy", value: 10 },
        { category: "fruit", value: 7 },
        { category: "transportation", value: 6 },
        { category: "colors", value: 0 },
        { category: "food", value: 0 }
      ],
      percentCategoryComplete: [
        { category: "animal", percent: 12 },
        { category: "beverages", percent: 1 },
        { category: "tools", percent: 100 },
        { category: "occupations", percent: 100 },
        { category: "birds", percent: 24 },
        { category: "technology", percent: 50 },
        { category: "math terms", percent: 29 },
        { category: "plants", percent: 72 },
        { category: "cooking terms", percent: 12 },
        { category: "religion", percent: 23 },
        { category: "periodic elements", percent: 32 },
        { category: "sports", percent: 89 },
        { category: "science", percent: 0 },
        { category: "business", percent: 20 },
        { category: "trees", percent: 3 },
        { category: "musical instruments", percent: 40 },
        { category: "politics", percent: 17 },
        { category: "weather terms", percent: 12 },
        { category: "clothing", percent: 43 },
        { category: "medical", percent: 61 },
        { category: "vegetables", percent: 20 },
        { category: "anatomy", percent: 12 },
        { category: "fruit", percent: 9 },
        { category: "transportation", percent: 100 },
        { category: "colors", percent: 60 },
        { category: "food", percent: 99 }
      ]
    }
  ]
};

module.exports = statsMock;