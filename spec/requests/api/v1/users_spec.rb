# TODO: To successfully execute the tests, you need to uncomment a portion of the code
# TODO: in the app/controllers/application_controller.rb file, lines 11-15.

RSpec.describe 'Api::V1::UsersController', type: :request do
  let!(:user) { create(:user) }

  describe 'GET /api/v1/current_user' do
    context 'when user is authenticated' do
      before do
        sign_in user, scope: :user
        get api_v1_current_user_path
      end

      it 'returns the current user email' do
        expect(user['email']).to eq(user.email)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when user is not authenticated' do
      before do
        get api_v1_current_user_path
      end

      it 'returns an error message' do
        parsed_response = JSON.parse(response.body)
        expect(parsed_response['error']).to eq('User not logged in')
      end

      it 'returns status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end
end
