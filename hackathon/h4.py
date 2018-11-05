import pandas
filename= 'game1.csv'
df=pandas.read_csv(filename, encoding="latin-1")
players= int(input('enter number of players'))
age1=int(input('enter player age'))
x1= ((df['min_players']<players) & (df['max_players']>players) & (df['age']==age1))
print(df[x1])

