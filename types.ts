import React from 'react';

export enum Page {
  HOME = 'HOME',
  TOPIC = 'TOPIC',
  INNOVATIONS = 'INNOVATIONS',
  CASE_STUDIES = 'CASE_STUDIES',
  RECOMMENDATIONS = 'RECOMMENDATIONS',
  REFERENCES = 'REFERENCES'
}

export interface NavItem {
  id: Page;
  label: string;
  icon?: React.ReactNode;
}

export interface ChartData {
  name: string;
  Traditional: number;
  AI_Driven: number;
  unit: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}