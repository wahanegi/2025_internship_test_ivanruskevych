RSpec.describe Tweet, type: :model do
  context 'Content rules' do
    it "is not valid without content" do
      tweet = FactoryBot.build(:tweet, content: nil)
      expect(tweet).to_not be_valid
      expect(tweet.errors[:content]).to include("can't be blank")
    end

    it "is not valid with longer then 255 characters" do
      tweet = FactoryBot.build(:tweet, content: 'a' * 256)
      expect(tweet).to_not be_valid
      expect(tweet.errors[:content]).to include("is too long (maximum is 255 characters)")
    end
  end

  context "Likes rules" do
    it "is not valid without likes" do
      tweet = FactoryBot.build(:tweet, likes: nil)
      expect(tweet).to_not be_valid
      expect(tweet.errors[:likes]).to include("can't be blank")
    end

    it "is not valid with likes less then 0" do
      tweet = FactoryBot.build(:tweet, likes: -1)
      expect(tweet).to_not be_valid
      expect(tweet.errors[:likes]).to include("must be greater than or equal to 0")
    end

    it "is not valid with likes greater then 5" do
      tweet = FactoryBot.build(:tweet, likes: 6)
      expect(tweet).to_not be_valid
      expect(tweet.errors[:likes]).to include("must be less than or equal to 5")
    end

    it "must be an integer" do
      tweet = FactoryBot.build(:tweet, likes: 1.5)
      expect(tweet).to_not be_valid
      expect(tweet.errors[:likes]).to include("must be an integer")
    end
  end

  context "associations with user" do
    it "belongs to user" do
      user = FactoryBot.create(:user)
      tweet = FactoryBot.build(:tweet, user: user)
      expect(tweet.user).to eq(user)
    end

    it "" do
      tweet = FactoryBot.build(:tweet, user: nil)
      expect(tweet).to_not be_valid
      expect(tweet.errors[:user]).to include("must exist")
    end
  end
end
