import { useState } from 'react'
import { TabNav } from './components/layout/TabNav'
import { SidePanel } from './components/layout/SidePanel'
import { ReferenceTab } from './components/reference/ReferenceTab'
import { AoristsTab } from './components/aorists/AoristsTab'
import { John17Tab } from './components/john17/John17Tab'
import { PracticeTab } from './components/practice/PracticeTab'
import { SurvivalRulesTab } from './components/reference/SurvivalRulesTab'

type Tab = 'reference' | 'aorists' | 'john17' | 'practice' | 'survival'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('reference')
  const [sidePanelOpen, setSidePanelOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <header className="bg-stone-800 text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Greek Midterm Study Tool</h1>
          <p className="text-stone-400 text-sm">NT Greek — John 17, Aorists, Infinitives, Participles</p>
        </div>
        <button
          onClick={() => setSidePanelOpen(true)}
          className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white text-sm font-medium rounded transition-colors"
        >
          Quick Ref
        </button>
      </header>

      <TabNav active={activeTab} onChange={setActiveTab} />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {activeTab === 'reference' && <ReferenceTab />}
        {activeTab === 'aorists' && <AoristsTab />}
        {activeTab === 'john17' && <John17Tab />}
        {activeTab === 'practice' && <PracticeTab />}
        {activeTab === 'survival' && <SurvivalRulesTab />}
      </main>

      <SidePanel isOpen={sidePanelOpen} onClose={() => setSidePanelOpen(false)} />
    </div>
  )
}

export default App
