
import { useState, useEffect } from "react";
import { Check } from "lucide-react";

interface FormData {
  name: string;
  mobile: string;
  timeSlot: string;
}

export const GetCallbackSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [state, setState] = useState<'compact' | 'form' | 'success'>('compact');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    timeSlot: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercentage >= 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState('success');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      setState('compact');
      setFormData({ name: '', mobile: '', timeSlot: '' });
    }, 5000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-0 right-0 z-40 transition-all duration-400 ease-in-out" style={{ bottom: '80px' }}>
      {state === 'compact' && (
        <div 
          className="px-6 py-3 shadow-2xl cursor-pointer"
          style={{ backgroundColor: '#dbdfd2' }}
          onClick={() => setState('form')}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
              <h3 className="font-satoshi font-bold text-base" style={{ color: '#393f2d' }}>
                Still have questions?
              </h3>
              <p className="font-satoshi text-sm" style={{ color: '#393f2d' }}>
                Connect with an expert to get them answered.
              </p>
            </div>
            <button 
              className="px-6 py-2 rounded-full font-satoshi font-medium transition-all hover:shadow-lg"
              style={{ backgroundColor: '#FFFFFF', color: '#393f2d' }}
            >
              Get a Callback
            </button>
          </div>
        </div>
      )}

      {state === 'form' && (
        <div className="bg-white px-6 py-6 shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-satoshi text-sm font-medium mb-2" style={{ color: '#393f2d' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#393f2d] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-satoshi text-sm font-medium mb-2" style={{ color: '#393f2d' }}>
                  Your Mobile Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-100 font-satoshi text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:border-[#393f2d] transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-satoshi text-sm font-medium mb-2" style={{ color: '#393f2d' }}>
                  Preferred Callback Time
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => handleInputChange('timeSlot', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#393f2d] transition-colors"
                  required
                >
                  <option value="">Select a time slot</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                  <option value="evening">Evening (3 PM - 6 PM)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-satoshi font-medium text-white transition-all hover:shadow-lg"
                style={{ backgroundColor: '#393f2d' }}
              >
                Request My Callback
              </button>
            </form>
          </div>
        </div>
      )}

      {state === 'success' && (
        <div 
          className="px-6 py-4 shadow-2xl"
          style={{ backgroundColor: '#d4f57f' }}
        >
          <div className="max-w-6xl mx-auto flex items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full mr-4" style={{ backgroundColor: '#5CB85C' }}>
              <Check className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <h3 className="font-satoshi font-bold text-lg" style={{ color: '#393f2d' }}>
                Thank you!
              </h3>
              <p className="font-satoshi" style={{ color: '#393f2d' }}>
                We'll call you in your preferred slot.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
