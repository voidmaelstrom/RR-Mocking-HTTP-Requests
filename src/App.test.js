import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  // sets everything back to initial state before each test
  fetch.resetMocks();
})

test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
  fetch.mockResponseOnce(JSON.stringify({name: 'Bradley Stouffer'}))
  render(<App />)
  const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
  expect(gitHubName).toHaveTextContent('Bradley Stouffer')
})