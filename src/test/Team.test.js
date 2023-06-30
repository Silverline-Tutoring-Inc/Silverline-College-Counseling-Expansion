import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'

test("test team component rendered", () => {
    const { getByText } = render(<App/>)

    // check headings
    const execHeading = getByText("The Executives")
    const boardHeading = getByText("The Board")
    const logisticsHeading = getByText("The Logistics Team")
    const tutorsHeading = getByText("The Tutors")

    expect(execHeading).toBeInTheDocument()
    expect(boardHeading).toBeInTheDocument()
    expect(logisticsHeading).toBeInTheDocument()
    expect(tutorsHeading).toBeInTheDocument()

    // check executives
    const executives = [getByText("Ramon Perez"), getByText("Eric Cheng"), getByText("Aquib Syed"), getByText("Lauren Churchill"), getByText("Aayan Rahat"), getByText("Evan Fernando")]
    executives.map(e => expect(e).toBeInTheDocument())

    const board = [getByText("Rishi Ajmera"), getByText("Ohik Kwon"), getByText("Nolan Du"), getByText("Shivam Shah"), getByText("Avaneesh Mallela"), getByText("Martin Coleman"), getByText("Hassan Palanpurwala")]
    board.map(b => expect(b).toBeInTheDocument())

})