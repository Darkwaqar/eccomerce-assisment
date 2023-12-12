import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CustomDrawerContent from './CustomDrawerContent'
import { SafeAreaView } from 'react-native'

describe('CustomDrawerContent', () => {
  it('renders correctly', async () => {
    const mockProps = {
      state: {
        routeNames: ['Home', 'Profile', 'Settings'],
        routes: [
          { key: 'Home', name: 'Home', params: {} },
          { key: 'Profile', name: 'Profile', params: {} },
          { key: 'Settings', name: 'Settings', params: {} },
        ],
        index: 0,
        history: [],
      },
      navigation: {
        navigate: jest.fn(),
        toggleDrawer: jest.fn(),
        closeDrawer: jest.fn(),
        openDrawer: jest.fn(),
        getRootState: jest.fn(),
        isFocused: jest.fn(),
        jumpTo: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        setOptions: jest.fn(),
        setParams: jest.fn(),
      },
      descriptors: {
        Home: { options: {}, render: jest.fn() },
        Profile: { options: {}, render: jest.fn() },
        Settings: { options: {}, render: jest.fn() },
      },
    }

    const { findByTestId, debug } = render(
      <SafeAreaProvider>
        <SafeAreaView>
          {/* @ts-ignore */}
          <CustomDrawerContent {...mockProps} />
        </SafeAreaView>
      </SafeAreaProvider>,
    )

    // Adjust the case in the assertions based on the expected content in the component
    // Wait for the text content to appear
    try {
      const personNameText = await waitFor(() => findByTestId('person-name'))
      console.log('Person Name Text:', personNameText.props.children)

      expect(personNameText).toBeDefined()
      expect(personNameText.props.children).toBe('JANE GARY')
    } catch (error) {
      console.error('Error:', error)
    }
  })
})
