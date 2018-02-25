require 'spec_helper'
require 'rails_helper'

feature "adding a new goal" do
  
  before(:each) do
    visit new_goal_url
  end
  
  
  scenario "has a new goal page" do
    expect(page).to have_content("New Goal")
  end
  
  feature "with valid input" do
    before(:each) do
      visit new_user_url
      fill_in 'Username', with: "biscuits"
      fill_in 'Password', with: 'wathever'
      click_on "Create User"
      visit new_goal_url
      fill_in "name", with: 'gravy'
      fill_in "status", with: 'in progress'
      fill_in "public", with: 'false'
    end
    scenario "successfully add goal and redirect to the goal show page" do
      expect(page).to have_content('gravy')
    end
  end
  
  feature "with invalid input" do
    before(:each) do
      visit new_user_url
      fill_in 'Username', with: "biscuits"
      fill_in 'Password', with: 'wathever'
      click_on "Create User"
      visit new_goal_url
      fill_in "name", with: ''
      fill_in "status", with: 'in progress'
      fill_in "public", with: 'false'
    end
    scenario "lash errors and render new goal page" do
      expect(page).to have_content('New Goal')
      expect(page).to have_content('empty')
    end
  end
  
end