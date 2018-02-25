require 'spec_helper'
require 'rails_helper'

feature "the signup process" do
  before(:each) do
    visit new_user_url
  end
  
  scenario "has a new user page" do
    expect(page).to have_content("Sign Up")
  end
  
  feature "with a valid user" do
    
    before(:each) do
      visit new_user_url
      fill_in 'Username', with: "biscuits"
      fill_in 'Password', with: 'wathever'
      click_on "Create User"
    end
    
    scenario "if successful should redirect to sign-in page" do
      expect(page).to have_content "Sign In"
    end
    
  end
  
  feature "with an invalid user" do 
    
    before(:each) do
      visit new_user_url
      fill_in 'Username', with: "biscuits"
      fill_in 'Password', with: ''
      click_on "Create User"
    end
    
    scenario "if fails should flash errors" do
      expect(page).to have_content "short"
    end
  end
  
  
  
  feature "the sign-in process" do
    
    feature "logging in" do
      
      
      feature "with valid credentials" do
        before(:each) do
          visit new_user_url
          fill_in 'Username', with: "biscuits"
          fill_in 'Password', with: 'wathever'
          click_on "Create User"
          click_on "Log Out"
          visit new_session_url
          fill_in 'Username', with: "biscuits"
          fill_in 'Password', with: 'wathever'
          click_on "Sign In"
        end
        scenario "sucessfully sign in and redirect to the page displaying username" do
          expect(page).to have_content 'biscuits'
        end
      end
      
      
      feature "with invalid credentials" do
        before(:each) do
          visit new_user_url
          fill_in 'Username', with: "biscuits"
          fill_in 'Password', with: 'wathever'
          click_on "Create User"
          click_on "Log Out"
          visit new_session_url
          fill_in 'Username', with: "biscuits"
          fill_in 'Password', with: '12'
          click_on "Sign In"
        end
        scenario "flash errors and render sign in page" do
          expect(page).to have_content 'Sign In'
          expect(page).to have_content 'invalid log-in credentials'
        end
      end
    end
  end
  feature "logging out" do
    
    before(:each) do
      visit new_user_url
      fill_in 'Username', with: "biscuits"
      fill_in 'Password', with: 'wathever'
      click_on "Create User"
      click_on "Log Out"
    end
    scenario "expect page not to include username" do
      expect(page).not_to have_content 'biscuits'
    end
  end
end